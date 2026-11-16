'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const cars = [
  {
    "name": "Aston Martin DB11 AMR",
    "image": "Aston Martin DB11 AMR.jpeg"
  },
  {
    "name": "Aston Martin DBS Superleggera",
    "image": "Aston Martin DBS Superleggera.jpg"
  },
  {
    "name": "Aston Martin Valkyrie",
    "image": "Aston Martin Valkyrie.jpg"
  },
  {
    "name": "Aston Martin Vantage",
    "image": "Aston Martin Vantage.jpeg"
  },
  {
    "name": "Audi A4",
    "image": "Audi A4.jpg"
  },
  {
    "name": "Audi A8",
    "image": "Audi A8.jpg"
  },
  {
    "name": "Audi R8",
    "image": "Audi R8.jpg"
  },
  {
    "name": "Bentley Continental GT",
    "image": "Bentley Continental GT.jpeg"
  },
  {
    "name": "BMW 3 Series",
    "image": "BMW 3 Series.jpeg"
  },
  {
    "name": "BMW 7 Series",
    "image": "BMW 7 Series.jpeg"
  },
  {
    "name": "Bugatti Chiron Sport",
    "image": "Bugatti Chiron Sport.jpg"
  },
  {
    "name": "Bugatti Chiron",
    "image": "Bugatti Chiron.jpg"
  },
  {
    "name": "Bugatti Divo",
    "image": "Bugatti Divo.jpg"
  },
  {
    "name": "Bugatti La Voiture Noire",
    "image": "Bugatti La Voiture Noire.jpeg"
  },
  {
    "name": "Cadillac Escalade",
    "image": "Cadillac Escalade.jpeg"
  },
  {
    "name": "Chevrolet Camaro 2015",
    "image": "Chevrolet Camaro 2015.jpg"
  },
  {
    "name": "Chevrolet Corvette Stingray",
    "image": "Chevrolet Corvette Stingray.jpg"
  },
  {
    "name": "Ferrari 296 GTB",
    "image": "Ferrari 296 GTB.jpg"
  },
  {
    "name": "Ferrari 488 GTB",
    "image": "Ferrari 488 GTB.jpg"
  },
  {
    "name": "Ferrari 812 Superfast",
    "image": "Ferrari 812 Superfast.jpg"
  },
  {
    "name": "Ferrari F8 Tributo",
    "image": "Ferrari F8 Tributo.jpg"
  },
  {
    "name": "Ferrari Roma 076",
    "image": "Ferrari Roma 076.jpg"
  },
  {
    "name": "Ferrari SF90 Stradale",
    "image": "Ferrari SF90 Stradale.jpg"
  },
  {
    "name": "Ford Mustang 1969",
    "image": "Ford Mustang 1969.jpg"
  },
  {
    "name": "Honda Civic 2020",
    "image": "Honda Civic 2020"
  },
  {
    "name": "Honda Civic 2022",
    "image": "Honda Civic 2022.jpg"
  },
  {
    "name": "Hyundai Elantra 2023",
    "image": "Hyundai Elantra 2023.jpg"
  },
  {
    "name": "Jaguar F-Type",
    "image": "Jaguar F-Type.jpg"
  },
  {
    "name": "Kia Optima",
    "image": "Kia Optima.jpg"
  },
  {
    "name": "Koenigsegg Agera RS",
    "image": "Koenigsegg Agera RS.jpeg"
  },
  {
    "name": "Koenigsegg Jesko",
    "image": "Koenigsegg Jesko.jpg"
  },
  {
    "name": "Koenigsegg Regera",
    "image": "Koenigsegg Regera.jpg"
  },
  {
    "name": "Lamborghini Aventador SVJ",
    "image": "Lamborghini Aventador SVJ.jpeg"
  },
  {
    "name": "Lamborghini Aventador",
    "image": "Lamborghini Aventador.jpg"
  },
  {
    "name": "Lamborghini Centenario",
    "image": "Lamborghini Centenario.jpeg"
  },
  {
    "name": "Lamborghini Huracan STO",
    "image": "Lamborghini Huracan STO.jpg"
  },
  {
    "name": "Lamborghini Huracan",
    "image": "Lamborghini Huracan.jpg"
  },
  {
    "name": "Lamborghini Sian",
    "image": "Lamborghini Sian.jpg"
  },
  {
    "name": "Lotus Evija",
    "image": "Lotus Evija.jpg"
  },
  {
    "name": "Maserati Quattroporte GTS",
    "image": "Maserati Quattroporte GTS.jpg"
  },
  {
    "name": "McLaren 720S",
    "image": "McLaren 720S.jpg"
  },
  {
    "name": "McLaren 765LT",
    "image": "McLaren 765LT.jpg"
  },
  {
    "name": "McLaren P1",
    "image": "McLaren P1.jpg"
  },
  {
    "name": "McLaren Speedtail",
    "image": "McLaren Speedtail.jpg"
  },
  {
    "name": "Mercedes-Benz C-Class",
    "image": "Mercedes-Benz C-Class.jpeg"
  },
  {
    "name": "Mercedes-Benz S-Class w220",
    "image": "Mercedes-Benz S-Class w220.jpeg"
  },
  {
    "name": "Nissan Altima",
    "image": "Nissan Altima.jpg"
  },
  {
    "name": "Pagani Huayra Roadster BC",
    "image": "Pagani Huayra Roadster BC.jpg"
  },
  {
    "name": "Pagani Huayra",
    "image": "Pagani Huayra.jpg"
  },
  {
    "name": "Pagani Zonda HP Barchetta",
    "image": "Pagani Zonda HP Barchetta.jpeg"
  },
  {
    "name": "Porsche 911 Turbo S",
    "image": "Porsche 911 Turbo S.jpeg"
  },
  {
    "name": "Porsche 911",
    "image": "Porsche 911.avif"
  },
  {
    "name": "Porsche 918 Spyder",
    "image": "Porsche 918 Spyder.jpeg"
  },
  {
    "name": "Porsche Panamera Turbo",
    "image": "Porsche Panamera Turbo.jpg"
  },
  {
    "name": "Range Rover Autobiography 2019",
    "image": "Range Rover Autobiography 2019.jpg"
  },
  {
    "name": "Rolls-Royce Cullinan",
    "image": "Rolls-Royce Cullinan.jpg"
  },
  {
    "name": "Rolls-Royce Phantom",
    "image": "Rolls-Royce Phantom.jpg"
  },
  {
    "name": "Rolls-Royce Wraith",
    "image": "Rolls-Royce Wraith.jpg"
  },
  {
    "name": "Toyota Corolla",
    "image": "Toyota Corolla.jpeg"
  },
  {
    "name": "Volkswagen Golf",
    "image": "Volkswagen Golf.jpg"
  }
];

  // Mobile navigation and sticky header.
  const overlay = document.querySelector('[data-overlay]');
  const navbar = document.querySelector('[data-navbar]');
  const navToggle = document.querySelector('[data-nav-toggle-btn]');
  const header = document.querySelector('[data-header]');

  const closeMenu = () => {
    navbar?.classList.remove('active');
    overlay?.classList.remove('active');
    navToggle?.classList.remove('active');
    navToggle?.setAttribute('aria-expanded', 'false');
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = navbar?.classList.toggle('active') || false;
    overlay?.classList.toggle('active', isOpen);
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
  overlay?.addEventListener('click', closeMenu);
  document.querySelectorAll('[data-nav-link], .navbar-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  const updateHeader = () => header?.classList.toggle('active', window.scrollY > 10);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const brandOf = name => {
    const known = [
      'Aston Martin', 'Mercedes-Benz', 'Rolls-Royce', 'Land Rover',
      'Range Rover', 'Chevrolet', 'Volkswagen', 'Lamborghini',
      'Koenigsegg', 'Maserati', 'McLaren', 'Cadillac', 'Bugatti',
      'Porsche', 'Ferrari', 'Bentley', 'Pagani', 'Hyundai',
      'Toyota', 'Nissan', 'Jaguar', 'Honda', 'Audi', 'BMW', 'Kia',
      'Ford', 'Lotus'
    ];
    return known.find(brand => name.toLowerCase().startsWith(brand.toLowerCase())) || 'Other';
  };

  const imagePath = filename => './assets/images/' + encodeURIComponent(filename).replace(/%2F/gi, '/');

  const cardMarkup = (car, index) => `
    <li class="car-grid-item">
      <article class="featured-car-card catalog-car-card">
        <figure class="card-banner">
          <img src="${imagePath(car.image)}" alt="${car.name}" loading="${index < 6 ? 'eager' : 'lazy'}" decoding="async" width="440" height="300">
          <span class="car-brand-tag">${brandOf(car.name)}</span>
        </figure>
        <div class="card-content">
          <div class="card-title-wrapper">
            <h3 class="h3 card-title"><span>${car.name}</span></h3>
            <span class="year">${brandOf(car.name)}</span>
          </div>
          <div class="car-card-bottom">
            <p class="card-price"><strong>料金はお問い合わせください</strong></p>
            <button class="btn fav-btn" type="button" aria-label="お気に入りに追加" aria-pressed="false" data-favorite="${car.name}">
              <ion-icon name="heart-outline"></ion-icon>
            </button>
          </div>
        </div>
      </article>
    </li>`;

  // Render the home-page featured vehicles from the same real image inventory.
  const featuredGrid = document.querySelector('[data-car-grid="featured"]');
  if (featuredGrid) {
    const featuredNames = [
      'Toyota Corolla', 'Honda Civic 2022', 'BMW 3 Series',
      'Mercedes-Benz C-Class', 'Audi A4', 'Porsche 911 Turbo S'
    ];
    const featuredCars = featuredNames
      .map(name => cars.find(car => car.name === name))
      .filter(Boolean);
    featuredGrid.innerHTML = featuredCars.map(cardMarkup).join('');
  }

  // Build the complete catalog from the image filenames included in this project.
  const catalog = document.querySelector('[data-car-grid="catalog"]');
  const searchInput = document.getElementById('catalog-search');
  const brandFilter = document.getElementById('brand-filter');
  const countLabel = document.getElementById('catalog-count');
  const clearButton = document.getElementById('clear-filters');

  if (catalog) {
    const brands = [...new Set(cars.map(car => brandOf(car.name)))].sort((a, b) => a.localeCompare(b));
    if (brandFilter) {
      brands.forEach(brand => {
        const option = document.createElement('option');
        option.value = brand;
        option.textContent = brand;
        brandFilter.appendChild(option);
      });
    }

    const renderCatalog = () => {
      const query = (searchInput?.value || '').trim().toLocaleLowerCase();
      const terms = query.split(/\\s+/).filter(Boolean);
      const selectedBrand = brandFilter?.value || '';
      const visibleCars = cars.filter(car => {
        const searchable = (car.name + ' ' + brandOf(car.name)).toLocaleLowerCase();
        const matchesText = !terms.length || terms.every(term => searchable.includes(term));
        const matchesBrand = !selectedBrand || brandOf(car.name) === selectedBrand;
        return matchesText && matchesBrand;
      });

      catalog.innerHTML = visibleCars.length
        ? visibleCars.map(cardMarkup).join('')
        : '<li class="catalog-empty"><ion-icon name="search-outline"></ion-icon><h3>該当する車両が見つかりません</h3><p>検索条件を変更して、もう一度お試しください。</p></li>';

      if (countLabel) countLabel.textContent = `${visibleCars.length}台の車両を表示（全${cars.length}台）`;
      bindFavoriteButtons();
    };

    searchInput?.addEventListener('input', renderCatalog);
    brandFilter?.addEventListener('change', renderCatalog);
    clearButton?.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      if (brandFilter) brandFilter.value = '';
      renderCatalog();
    });
    renderCatalog();
  }

  // Favorites persist in this browser.
  function bindFavoriteButtons() {
    let saved = [];
    try { saved = JSON.parse(localStorage.getItem('ridex-favorites') || '[]'); } catch (_) {}
    document.querySelectorAll('[data-favorite]').forEach(button => {
      const name = button.dataset.favorite;
      const icon = button.querySelector('ion-icon');
      const active = saved.includes(name);
      button.classList.toggle('is-favorite', active);
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', active ? 'お気に入りから削除' : 'お気に入りに追加');
      if (icon) icon.setAttribute('name', active ? 'heart' : 'heart-outline');
    });
  }

  document.addEventListener('click', event => {
    const button = event.target.closest('[data-favorite]');
    if (!button) return;
    const name = button.dataset.favorite;
    let favorites = [];
    try { favorites = JSON.parse(localStorage.getItem('ridex-favorites') || '[]'); } catch (_) {}
    const next = favorites.includes(name)
      ? favorites.filter(item => item !== name)
      : [...favorites, name];
    try { localStorage.setItem('ridex-favorites', JSON.stringify(next)); } catch (_) {}
    bindFavoriteButtons();
  });
  bindFavoriteButtons();

  // The home search transfers its criteria to the full catalog page.
  const homeForm = document.querySelector('.hero-form');
  if (homeForm) {
    homeForm.addEventListener('submit', event => {
      event.preventDefault();
      const model = homeForm.querySelector('[name="car-model"]')?.value.trim() || '';
      const brand = homeForm.querySelector('[name="monthly-pay"]')?.value.trim() || '';
      const keyword = homeForm.querySelector('[name="year"]')?.value.trim() || '';
      const query = [model, brand, keyword].filter(Boolean).join(' ');
      window.location.href = 'index2.html' + (query ? '?q=' + encodeURIComponent(query) : '');
    });
  }

  // Apply search criteria passed from the home page.
  if (searchInput && new URLSearchParams(window.location.search).has('q')) {
    searchInput.value = new URLSearchParams(window.location.search).get('q') || '';
    searchInput.dispatchEvent(new Event('input'));
  }
});
