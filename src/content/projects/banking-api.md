---
title: "Banking System REST API"
slug: "banking-api"
language: "en"
type: "personal"
status: "ongoing"
year: 2026
order: 0
featured: true
confidential: false
repository: "https://github.com/manu-d3v3lop3r/banking-system-api"
summary: "REST API built with Java 21 and Spring Boot to manage customers, accounts, cards and transactions, with JWT authentication, role-based access control, OpenAPI documentation and 56 automated tests."
technologies:
  - Java 21
  - Spring Boot
  - Spring Security
  - JWT
  - Spring Data JPA
  - Hibernate
  - H2
  - MapStruct
  - Jakarta Validation
  - OpenAPI / Swagger
  - JUnit 5
  - Mockito
  - Maven
role: "End-to-end design and development: domain model, API, security and tests."
team: "Solo project"
---

## Context

A personal project to go deeper into backend development with the Spring
ecosystem. I chose a banking domain because it forces you to solve real API
problems: business rules involving money, operations that must be atomic,
different permissions per user type, and errors that must be communicated
clearly to the client.

![Interactive API documentation in Swagger UI](/images/projects/banking-api/swagger.png)

## What the API does

- **Customers:** create and query customers, rejecting duplicate ID documents
  and emails.
- **Accounts:** open accounts with an automatically generated unique number and
  check balances.
- **Cards:** issue debit or credit cards linked to an account, with generated
  number and CVV, and card blocking.
- **Transactions:** deposits, withdrawals and transfers between accounts; every
  operation is recorded as an account movement.
- **Authentication:** login endpoint that returns a JWT to use on every other
  request.

## Architecture

The project follows a layered architecture with clear responsibilities:

- **Controllers:** expose the REST endpoints and enforce authorisation with
  `@PreAuthorize`.
- **Services:** hold the business logic and define transaction boundaries with
  `@Transactional`.
- **Repositories:** data access with Spring Data JPA.
- **DTOs and mappers:** JPA entities are never exposed; MapStruct converts
  between entities and DTOs.
- **Error handling:** a `@RestControllerAdvice` turns domain exceptions into
  consistent JSON responses with the right HTTP status (400, 403, 404, 409).

## Security

- Stateless authentication with **JWT** signed with HMAC-SHA256; a custom
  filter validates the token on every request.
- **Three roles** (`ADMIN`, `EMPLEADO`, `CLIENTE`) with per-endpoint
  permissions: only admins and employees can create customers, accounts and
  cards or perform operations; customers can check balances.
- Passwords hashed with BCrypt.
- Custom JSON 401 and 403 responses.
- JWT settings (secret, issuer, expiry) validated at startup.

## Technical decisions

- **`BigDecimal` for amounts**, never `double`, to avoid rounding errors with
  money.
- **Atomic transfers:** debiting the source account, crediting the destination
  and recording both movements run in a single transaction; if anything fails,
  nothing is applied.
- **Business rules in the service layer:** positive amounts, sufficient balance
  and no transfers to the same account, each with its own exception.
- **Unique number generators** for accounts and cards that check the database
  before assigning a value.

![A transfer executed from Swagger](/images/projects/banking-api/transferencia.png)

## Testing

The API includes **56 automated tests**:

- Service unit tests with Mockito.
- Controller tests with MockMvc, including authorisation cases.
- End-to-end integration tests against an H2 database.
- Tests for the JWT service and filter.

Measured coverage is **84% of lines** and **93% of classes**.

![Test coverage report](/images/projects/banking-api/coverage.png)

## What I learned

- Configuring Spring Security from scratch for a stateless API, understanding
  filter ordering and how the security context is built.
- Designing an API with its consumers in mind: clear DTOs, consistent errors
  and browsable OpenAPI documentation.
- Writing tests at different levels and using them to refactor safely.

## Next steps

Improvements identified while reviewing the project:

- **Resource ownership:** link each `CLIENTE` user to their customer record so
  they can only query their own accounts.
- **Concurrency:** add optimistic locking (`@Version`) on accounts to prevent
  lost updates under concurrent operations.
- **Account status:** reject operations on blocked or closed accounts.
- **History:** expose an endpoint to list an account's movements, with
  pagination.
- **Infrastructure:** PostgreSQL with per-environment profiles, Docker, a
  GitHub Actions CI pipeline and publicly hosted API docs.
