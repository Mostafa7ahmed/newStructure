# 🧠 Angular Project Structure

This project follows a modular and scalable architecture using Angular. Below is an overview of the folder structure and purpose of each directory.

---

## 📁 Project Structure

```

src/app/
├── Components/           # Reusable UI components shared across the app
├── Core/                 # Core building blocks and shared services
│   ├── Directives/       # Custom directives to extend HTML behavior
│   ├── Guards/           # Route guards for authentication and role-based access
│   ├── interceptor/      # Global HTTP interceptors (e.g., auth tokens, error handling)
│   ├── pipes/            # Custom pipes for transforming data in templates
│   ├── service/          # Core services (e.g., API, auth, storage)
│   └── shared/           # Shared models, types, constants, and utilities
├── Layout/               # App layout components (used across pages)
│   ├── Navbar/           # Top navigation bar for app sections
│   ├── Sidebar/          # Side navigation menu (student/instructor-specific)
│   ├── Footer/           # Footer layout shown across pages
│   └── ...               # Other shared layout blocks (e.g., header, loader)
├── Pages/                # Main feature modules and app pages
│   ├── Auth/             # Authentication-related pages (login, register, etc.)
│   └── ...               # Other features (e.g., dashboard, profile, settings)
└── routes/               # Application routing configuration and guards


```


## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd Structure
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
ng serve
```

4. Navigate to `http://localhost:4200/`

## Development

- Run `ng generate component component-name` to generate a new component
- Run `ng build` to build the project
- Run `ng test` to execute unit tests

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.