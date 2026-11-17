---
title: "API REST de sistema bancario"
slug: "api-bancaria"
language: "es"
type: "personal"
status: "ongoing"
year: 2026
order: 0
featured: true
confidential: false
repository: "https://github.com/manu-d3v3lop3r/banking-system-api"
summary: "API REST con Java 21 y Spring Boot para gestionar clientes, cuentas, tarjetas y transacciones, con autenticación JWT, control de acceso por roles, documentación OpenAPI y 56 tests automatizados."
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
role: "Diseño y desarrollo completo: modelo de dominio, API, seguridad y tests."
team: "Individual"
---

## Contexto

Proyecto personal para profundizar en desarrollo backend con el ecosistema
Spring. Elegí un dominio bancario porque obliga a resolver problemas reales de
una API: reglas de negocio con dinero, operaciones que deben ser atómicas,
permisos distintos según el tipo de usuario y errores que hay que comunicar
con claridad al cliente.

![Documentación interactiva de la API en Swagger UI](/images/projects/banking-api/swagger.png)

## Qué hace la API

- **Clientes:** alta y consulta, con validación de documento y email
  duplicados.
- **Cuentas:** apertura con número de cuenta único generado automáticamente y
  consulta de saldo.
- **Tarjetas:** emisión de tarjetas de débito o crédito asociadas a una cuenta,
  con número y CVV generados, y bloqueo de tarjetas.
- **Transacciones:** depósitos, retiradas y transferencias entre cuentas; cada
  operación queda registrada como movimiento de la cuenta.
- **Autenticación:** login que devuelve un token JWT para usar en el resto de
  peticiones.

## Arquitectura

El proyecto sigue una arquitectura por capas con responsabilidades separadas:

- **Controllers:** exponen los endpoints REST y aplican la autorización con
  `@PreAuthorize`.
- **Services:** contienen la lógica de negocio y delimitan las transacciones
  con `@Transactional`.
- **Repositories:** acceso a datos con Spring Data JPA.
- **DTOs y mappers:** la API nunca expone entidades JPA; MapStruct convierte
  entre entidades y DTOs.
- **Gestión de errores:** un `@RestControllerAdvice` traduce las excepciones de
  dominio a respuestas JSON homogéneas con el código HTTP adecuado (400, 403,
  404, 409).

## Seguridad

- Autenticación sin estado con **JWT** firmado con HMAC-SHA256: un filtro
  propio valida el token en cada petición.
- **Tres roles** (`ADMIN`, `EMPLEADO`, `CLIENTE`) con permisos por endpoint:
  solo administradores y empleados pueden crear clientes, cuentas y tarjetas o
  realizar operaciones; el cliente puede consultar saldos.
- Contraseñas cifradas con BCrypt.
- Respuestas 401 y 403 personalizadas en formato JSON.
- Configuración del JWT (clave, emisor, expiración) validada al arrancar la
  aplicación.

## Decisiones técnicas

- **`BigDecimal` para importes**, nunca `double`, para evitar errores de
  redondeo con dinero.
- **Transferencias atómicas:** el cargo en la cuenta de origen, el abono en la
  de destino y el registro de ambos movimientos se ejecutan en una única
  transacción; si algo falla, no se aplica nada.
- **Reglas de negocio en el servicio:** importes positivos, saldo suficiente y
  prohibición de transferir a la misma cuenta, cada una con su propia
  excepción.
- **Generadores de números únicos** para cuentas y tarjetas que comprueban en
  base de datos que no exista ya el valor.

![Ejemplo de transferencia ejecutada desde Swagger](/images/projects/banking-api/transferencia.png)

## Testing

La API incluye **56 tests** automatizados:

- Tests unitarios de servicios con Mockito.
- Tests de controladores con MockMvc, incluidos los casos de autorización.
- Tests de integración de extremo a extremo con base de datos H2.
- Tests del servicio y del filtro JWT.

La cobertura medida es del **84 % de líneas** y del **93 % de clases**.

![Informe de cobertura de tests](/images/projects/banking-api/coverage.png)

## Qué he aprendido

- A configurar Spring Security de cero en una API sin estado, entendiendo el
  orden de los filtros y cómo se construye el contexto de seguridad.
- A diseñar una API pensando en quien la consume: DTOs claros, errores
  consistentes y documentación OpenAPI navegable.
- A escribir tests en distintos niveles y a usarlos para refactorizar con
  seguridad.

## Próximos pasos

Mejoras identificadas al revisar el proyecto:

- **Propiedad de los recursos:** vincular cada usuario `CLIENTE` con su
  cliente para que solo pueda consultar sus propias cuentas.
- **Concurrencia:** añadir bloqueo optimista (`@Version`) en las cuentas para
  evitar actualizaciones perdidas en operaciones simultáneas.
- **Estado de la cuenta:** impedir operaciones sobre cuentas bloqueadas o
  cerradas.
- **Historial:** exponer un endpoint para consultar los movimientos de una
  cuenta, con paginación.
- **Infraestructura:** PostgreSQL con perfiles por entorno, Docker, pipeline de
  CI con GitHub Actions y despliegue público de la documentación.
