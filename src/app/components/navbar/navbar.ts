import { Component, OnDestroy, afterNextRender, inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CV } from '../../data/cv.data';

export interface NavLink {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);

  readonly cv = CV;
  menuOpen = false;
  readonly activeSection = signal('inicio');

  readonly links: NavLink[] = [
    { id: 'inicio', label: 'Inicio', icon: 'bi-house' },
    { id: 'perfil', label: 'Perfil', icon: 'bi-person' },
    { id: 'experiencia', label: 'Experiencia', icon: 'bi-briefcase' },
    { id: 'skills', label: 'Skills', icon: 'bi-code-slash' },
    { id: 'proyectos', label: 'Proyectos', icon: 'bi-folder2-open' },
    { id: 'contacto', label: 'Contacto', icon: 'bi-envelope' },
  ];

  private observer?: IntersectionObserver;
  private scrollingTo: string | null = null;
  private scrollUnlockTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    afterNextRender(() => {
      if (isPlatformBrowser(this.platformId)) {
        this.setupScrollSpy();
      }
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.scrollUnlockTimer) {
      clearTimeout(this.scrollUnlockTimer);
    }
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }

  scrollTo(sectionId: string, event?: Event): void {
    event?.preventDefault();
    this.activeSection.set(sectionId);
    this.scrollingTo = sectionId;
    this.closeMenu();

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${sectionId}`);
    }

    if (this.scrollUnlockTimer) {
      clearTimeout(this.scrollUnlockTimer);
    }
    this.scrollUnlockTimer = setTimeout(() => {
      this.scrollingTo = null;
    }, 800);
  }

  private setupScrollSpy(): void {
    const sections = this.links
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => !!el);

    if (!sections.length) {
      // Portfolio may still be mounting; retry once
      setTimeout(() => this.setupScrollSpy(), 100);
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        if (this.scrollingTo) {
          return;
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          this.activeSection.set(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => this.observer?.observe(section));

    const hash = window.location.hash.replace('#', '');
    if (hash && this.links.some((l) => l.id === hash)) {
      this.scrollTo(hash);
    }
  }
}
