import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface Navgation {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor() { }

  navigationLinks: Navgation[] = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'Users',
      href: '/users'
    },
    {
      label: 'Books',
      href: '/books'
    }
  ];

  ngOnInit(): void {
  }

}
