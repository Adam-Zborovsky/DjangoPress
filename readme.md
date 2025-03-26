# DjangoPress

DjangoPress is a full-stack web application built with Django and Django REST Framework on the backend and React with Bootstrap on the frontend. It features a modular architecture with separate apps for users, articles, and comments, and implements robust JWT authentication with custom permissions.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Sample Data](#sample-data)
- [Testing](#testing)
- [License](#license)

## Overview

DjangoPress allows administrators to manage articles while regular users can view articles and interact by posting comments. The application includes user management functionalities with JWT-based authentication and custom permissions to ensure that only authorized users perform restricted actions.

## Features

- **Modular Architecture**

  - Articles App: Admin-only article management with public viewing
  - Comments App: Authenticated user comments with owner/admin management
  - Users App: User registration and profile management

- **Authentication & Permissions**

  - JWT authentication with `djangorestframework-simplejwt`
  - Custom role-based permissions
  - Admin-only article management
  - Comment ownership controls

- **Frontend Features**
  - Responsive Bootstrap UI
  - Article search and filtering
  - Paginated article listing
  - Rich text article editing

## Tech Stack

### Backend

- Python 3.12+
- Django 5.x
- Django REST Framework
- PostgreSQL/SQLite
- JWT Authentication

### Frontend

- React
- React Router
- Axios
- Bootstrap
