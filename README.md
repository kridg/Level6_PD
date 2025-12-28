# AI-Solutions – React + Django REST + Tailwind

AI-Solutions is a full-stack demo for an applied AI consultancy. It includes a marketing site, inquiry intake form,
and an admin console to manage inquiries and content (services, events, testimonials, FAQs) backed by a Django REST API.

## Project Structure
- `backend/` – Django project `ai_solutions` with `inquiries` and `content` apps and DRF endpoints.
- `frontend/` – React (CRA) + Tailwind UI.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Python 3.11+** and pip
- **Node.js 18+** and npm
- **Git**

To verify your installations:
```bash
python --version  # Should be 3.11 or higher
node --version    # Should be 18 or higher
npm --version
git --version
```

## Quick Start

> 📖 **New to this project?** Check out [SETUP.md](SETUP.md) for a detailed step-by-step guide.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Backend Setup

**Windows (Easiest):**
- Navigate to backend: `cd backend`
- Double-click `start_backend.bat` - This handles everything automatically!

**Windows PowerShell:**
```powershell
cd backend
.\start_backend.ps1
```

**Mac/Linux or Manual Setup:**
See [Backend Setup](#backend-setup) section below.

### 3. Frontend Setup

Open a **new terminal window** and run:

```bash
cd frontend
npm install
npm start
```

The frontend will automatically open at `http://localhost:3000`

### 4. Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:8000/api
- **Django Admin:** http://localhost:8000/admin/
- **Admin Panel:** http://localhost:3000/admin

## Backend Setup

### EASIEST METHOD - Use startup scripts:

**Windows:** Double-click `backend/start_backend.bat` - This handles everything automatically!

**PowerShell:** Run `cd backend && .\start_backend.ps1`

### Manual Setup

#### Windows Command Prompt (CMD) - RECOMMENDED

1. **Open Command Prompt (CMD)**

2. **Navigate to backend directory:**
   ```cmd
   cd backend
   ```

3. **Create virtual environment:**
   ```cmd
   python -m venv env
   ```

4. **Activate virtual environment:**
   ```cmd
   env\Scripts\activate.bat
   ```
   You should see `(env)` at the start of your prompt.

5. **Verify it's activated (check Python path):**
   ```cmd
   where python
   ```
   Should show: `...\backend\env\Scripts\python.exe`

#### Windows PowerShell

1. **Navigate to backend directory:**
   ```powershell
   cd backend
   ```

2. **Create virtual environment (if not already created):**
   ```powershell
   python -m venv env
   ```

3. **Set execution policy (one-time, if needed):**
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```

4. **Activate virtual environment:**
   ```powershell
   .\env\Scripts\Activate.ps1
   ```
   
   **If PowerShell activation fails, use batch file:**
   ```powershell
   cmd /c "env\Scripts\activate.bat"
   ```

4. **Install dependencies:**
   ```powershell
   pip install -r requirements.txt
   ```

5. **Run migrations:**
   ```powershell
   python manage.py migrate
   ```

6. **Create superuser (for admin access):**
   ```powershell
   python manage.py createsuperuser
   ```
   Follow the prompts to create your admin username, email, and password.

7. **Create initial content data (optional but recommended):**
   
   **Option 1 - Using management command (recommended):**
   ```powershell
   python manage.py load_initial_data
   ```
   
   **Option 2 - Using Django shell:**
   ```powershell
   python manage.py shell
   ```
   Then run this Python code to populate initial data:
   ```python
   from content.models import Event, Feedback, FAQ, Service
   from django.contrib.auth.models import User
   from rest_framework.authtoken.models import Token
   
   # Create events
   events_data = [
       {"title": "AI Ops Summit 2025", "date": "Jan 22, 2025", "location": "San Francisco, CA", "description": "Panel on reliable model deployment and monitoring at scale.", "order": 0},
       {"title": "Healthcare AI Roundtable", "date": "Feb 18, 2025", "location": "Virtual", "description": "Discussing privacy-first AI for diagnostics and triage.", "order": 1},
       {"title": "Edge AI Workshop", "date": "Mar 10, 2025", "location": "Austin, TX", "description": "Hands-on lab for shipping computer vision models to edge devices.", "order": 2},
   ]
   for event in events_data:
       Event.objects.get_or_create(title=event["title"], defaults=event)
   
   # Create feedback
   feedback_data = [
       {"name": "Global FinTech Corp", "role": "CTO", "quote": "AI-Solutions delivered a secure, real-time fraud detection engine that reduced false positives by 37%.", "order": 0},
       {"name": "HealthNext", "role": "VP of Data", "quote": "Their MLOps team productionized our models with zero-downtime releases and excellent observability.", "order": 1},
       {"name": "LogiChain", "role": "Head of Engineering", "quote": "We shipped a demand forecasting system in six weeks thanks to their expert architects and engineers.", "order": 2},
   ]
   for feedback in feedback_data:
       Feedback.objects.get_or_create(name=feedback["name"], defaults=feedback)
   
   # Create FAQs
   faqs_data = [
       {"question": "How fast can we start?", "answer": "We can begin discovery within 3-5 business days. A dedicated pod is assembled immediately after alignment on scope and milestones.", "order": 0},
       {"question": "Do you work with existing teams?", "answer": "Yes. We integrate with your product, data, and security teams, adopting your rituals while adding our playbooks and dashboards.", "order": 1},
       {"question": "Can you hand off and train us?", "answer": "Absolutely. We include documentation, enablement sessions, and runbooks for operations, incident response, and model updates.", "order": 2},
       {"question": "What about compliance and data privacy?", "answer": "We design for least-privilege access, audit trails, PII minimization, and align with your compliance requirements from day one.", "order": 3},
   ]
   for faq in faqs_data:
       FAQ.objects.get_or_create(question=faq["question"], defaults=faq)
   
   # Create services
   services_data = [
       {"title": "Product Discovery", "badge": "Strategy", "text": "Rapid alignment on goals, KPIs, and feasibility with stakeholder workshops.", "icon_name": "Compass", "order": 0},
       {"title": "Data & Modeling", "badge": "Delivery", "text": "Robust pipelines, model selection, and evaluation with bias and drift checks.", "icon_name": "Database", "order": 1},
       {"title": "MLOps & Platforms", "badge": "Reliability", "text": "CI/CD for models, blue/green releases, observability, and runbooks baked in.", "icon_name": "ServerCog", "order": 2},
       {"title": "Experience & UI", "badge": "Product", "text": "Human-centered UIs, prompt UX, and guardrails that keep humans in the loop.", "icon_name": "LayoutDashboard", "order": 3},
       {"title": "Governance", "badge": "Trust", "text": "Policy enforcement, audit trails, and secure data handling across the stack.", "icon_name": "ShieldCheck", "order": 4},
       {"title": "Enablement", "badge": "Scale", "text": "Playbooks, training, and handover so internal teams can run with confidence.", "icon_name": "GraduationCap", "order": 5},
   ]
   for service in services_data:
       Service.objects.get_or_create(title=service["title"], defaults=service)
   
   # Ensure tokens exist for all users
   for user in User.objects.all():
       Token.objects.get_or_create(user=user)
   
   exit()
   ```

8. **Start the development server:**
   ```powershell
   python manage.py runserver 8000
   ```

   The backend will be available at `http://localhost:8000`

### Mac/Linux

```bash
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver 8000
```

## Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`

   **Note:** The frontend uses `npm start` (not `npm run dev`) as it's a Create React App project.

## Environment Variables

### Backend (`.env` file in `backend/` directory):

**Optional:** Create a `.env` file in the `backend/` directory if you want to customize settings:

```
DJANGO_SECRET_KEY=your-secret-key-here
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
POSTGRES_DB=ai_solutions
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```

**Note:** 
- If no `.env` file exists, the app will use default settings (SQLite database)
- If PostgreSQL environment variables are not set, the app will automatically use SQLite (`db.sqlite3`)
- The app works out of the box without a `.env` file for local development

### Frontend (`.env` file in `frontend/` directory - optional):

```
REACT_APP_API_URL=http://localhost:8000/api
```

**Note:** If not set, it defaults to `http://localhost:8000/api`. Only create this file if you need to change the API URL.

## API endpoints

### Public endpoints:
- `GET /api/events/` – list all active events
- `GET /api/feedback/` – list all active feedback
- `GET /api/faqs/` – list all active FAQs
- `GET /api/services/` – list all active services
- `POST /api/inquiries/` – create inquiry
- `GET /api/inquiries/stats/` – get inquiry statistics (public)

### Protected endpoints (require authentication):
- `GET /api/inquiries/` – list inquiries (supports `country`, `job_type` filters)
- `GET /api/inquiries/<id>/` – retrieve inquiry
- `PUT/PATCH/DELETE /api/inquiries/<id>/` – manage inquiry
- `POST /api/auth/token/` – obtain authentication token (username, password)

### Admin:
- `/admin/` – Django admin panel (Django auth)

## Troubleshooting

### Backend Issues

1. **500 Error on Login:**
   - Ensure migrations are run: `python manage.py migrate`
   - Ensure tokens exist for users. Run in Django shell:
     ```python
     from django.contrib.auth.models import User
     from rest_framework.authtoken.models import Token
     for user in User.objects.all():
         Token.objects.get_or_create(user=user)
     ```

2. **Virtual Environment Activation Issues:**
   - If PowerShell execution policy blocks activation, run:
     ```powershell
     Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
     ```
   - Or use: `env\Scripts\activate.bat`

3. **Module Not Found Errors:**
   - Ensure virtual environment is activated
   - Reinstall dependencies: `pip install -r requirements.txt`

### Frontend Issues

1. **API Connection Errors:**
   - Ensure backend is running on port 8000
   - Check `REACT_APP_API_URL` in `.env` file
   - Verify CORS is enabled in backend (should be by default)

2. **Port Already in Use:**
   - Change port: `PORT=3001 npm start`
   - Or kill the process using port 3000

## Testing

- Backend: `cd backend && python manage.py test`
- Frontend: `cd frontend && npm test`

## Features implemented

- **Responsive multi-page site**: Home, Approach, Solutions, Process, Results, Events, FAQ, Contact, Privacy, Terms
- **Dynamic content from backend**: services (solutions), testimonials (results), events, FAQs – all loaded via REST API
- **Contact form**: Formik + Yup validation, posts to Django API with proper success/error feedback
- **Admin console**: Django admin + token-based API to manage inquiries and content
- **Modern UI**: Tailwind CSS, transitions, animated sections, responsive NavBar and mobile menu
- **Auth & security**: token auth endpoint, automatic token creation, CORS configured, environment-based settings

## Important Notes

- **Database:** SQLite is used automatically when PostgreSQL environment variables are not set, enabling quick local demos without additional setup
- **Content Management:** All content (events, feedback, FAQs, services) can be edited from Django admin at `http://localhost:8000/admin/`
- **Authentication:** Public content endpoints are readable without auth; inquiry management is protected by token authentication
- **Environment Variables:** The app works out of the box without a `.env` file. Only create one if you need to customize settings or use PostgreSQL
- **Admin Panel:** The admin panel is accessible at `/admin` route and requires authentication. Regular users cannot access it through navigation

## Troubleshooting

If you encounter issues, check the [Troubleshooting](#troubleshooting) section below or refer to `SETUP.md` for detailed setup instructions.
