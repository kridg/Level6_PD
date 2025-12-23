# Tech Stack and Architecture Summary

## Overview

AI-Solutions is a full-stack web application demonstrating an applied AI consultancy site:
- Marketing pages (multi-page React app)
- Inquiry intake form
- Admin console for managing inquiries and content
- Django REST backend with token-based authentication

## Frontend

- **Framework**: React 18 (Create React App)
- **Routing**: React Router v6
- **Styling**: Tailwind CSS 3
- **HTTP Client**: Axios
- **Forms & Validation**:
  - Formik (form state and submission)
  - Yup (schema-based validation)
- **Icons**: lucide-react
- **Testing**:
  - @testing-library/react
  - @testing-library/jest-dom

### Frontend Structure

- `src/App.js`: Top-level router and layout (NavBar, Footer, routes)
- `src/pages/`:
  - `LandingPage` – high-level overview and contact CTA
  - `ApproachPage` – approach and philosophy
  - `SolutionsPage` – services/capabilities from backend
  - `ProcessPage` – delivery process
  - `FeedbackPage` – results/testimonials from backend
  - `EventsPage` – events from backend
  - `FAQPage` – FAQs from backend
  - `ContactPage` – contact form
  - `PrivacyPage`, `TermsPage` – basic legal content
  - `AdminPanel` – admin login + inquiry management UI
- `src/components/`:
  - `NavBar`, `Footer`, `Hero`, `CTASection`, `StatsCards`
  - `Highlights` (services), `FeedbackGrid` (testimonials), `EventsGrid` (events), `FAQ`
  - `ContactForm` (Formik/Yup form)
  - `admin/*` – admin table, filters, login shell
  - `SiteLogo` – reusable logo component (NavBar, Footer, AdminLogin)
- `src/services/api.js`: Axios client functions for backend endpoints

## Backend

- **Language**: Python 3.11
- **Framework**: Django 5
- **API**: Django REST Framework (DRF)
- **Auth**:
  - TokenAuthentication (DRF authtoken)
  - Custom token endpoint (`content.custom_auth.obtain_auth_token`)
- **CORS**: django-cors-headers
- **Config**: python-dotenv for environment variables
- **Database**:
  - Default: SQLite (`db.sqlite3`)
  - Optional: PostgreSQL via environment variables

### Backend Apps

- `ai_solutions` – Django project settings and URL routing
- `inquiries` – Inquiry model, serializer, viewset, stats endpoint
  - `POST /api/inquiries/` – create inquiry
  - `GET /api/inquiries/stats/` – aggregate stats (used in UI)
  - Auth-protected CRUD for inquiries
- `content` – Content models and APIs:
  - `Event`: title, date, location, description, image_url, ordering, active flag
  - `Feedback`: name, role, quote, avatar_url, ordering, active flag
  - `FAQ`: question, answer, ordering, active flag
  - `Service`: title, badge, text, icon_name (mapped to lucide-react icons), ordering, active flag
  - All have `created_at`/`updated_at` fields and admin integration

### Backend Endpoints (Summary)

- **Public content APIs**:
  - `GET /api/events/` – events
  - `GET /api/feedback/` – testimonials
  - `GET /api/faqs/` – FAQs
  - `GET /api/services/` – services/solutions
  - `POST /api/inquiries/` – submit inquiry (contact form)
  - `GET /api/inquiries/stats/` – stats used by UI
- **Protected APIs** (token auth):
  - `GET /api/inquiries/` – list inquiries with filters
  - `GET/PUT/PATCH/DELETE /api/inquiries/<id>/`
  - `POST /api/auth/token/` – obtain token with username/password
- **Admin**:
  - `/admin/` – manage all models, including content and inquiries

## Dependencies

### Python (backend/requirements.txt)

- `django==5.0.3`
- `djangorestframework==3.15.1`
- `django-cors-headers==4.3.1`
- `psycopg2-binary==2.9.9`
- `python-dotenv==1.0.1`

### Node (frontend/package.json)

- **Production deps**:
  - `react`, `react-dom`
  - `react-router-dom`
  - `react-scripts`
  - `axios`
  - `formik`, `yup`
  - `lucide-react`
- **Dev deps**:
  - `tailwindcss`, `postcss`, `autoprefixer`
  - `@testing-library/react`, `@testing-library/jest-dom`, `@testing-library/user-event`

## Responsiveness and UX

- Fully responsive layouts using Tailwind breakpoint classes (`sm`, `md`, `lg`)
- Sticky NavBar with backdrop blur and animated mobile hamburger
- Animated section entrances (fade-up), button and link transitions
- Accessible focus styles using Tailwind `focus-visible` utilities

## How to Evaluate the Project

- **Architecture**:
  - Clean separation of concerns (frontend SPA + backend API)
  - DRF viewsets for APIs; React service layer for HTTP
  - Content-driven sections (services, feedback, events, FAQs) maintained via admin
- **Code quality**:
  - Componentized React UI
  - Tailwind for consistent, responsive design
  - Backend organized into apps with serializers, viewsets, and admin
- **Extensibility**:
  - Easy to add new content types to `content` app
  - Easy to add new pages/routes in React
  - Support for switching SQLite → PostgreSQL via env vars
- **Operations**:
  - Ready for containerization if desired (Django + CRA)
  - Token auth and CORS in place for secure SPA ↔ API communication



