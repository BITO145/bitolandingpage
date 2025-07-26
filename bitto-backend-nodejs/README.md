# Bitto World Node.js Backend API

## Base URL

```
http://localhost:3000/api
```

## Authentication
- Register: `POST /api/auth/register`
- Login: `POST /api/auth/login`
- Admin Login: `POST /api/auth/admin/login`
- All protected endpoints require `Authorization: Bearer <token>`

## Resources (CRUD)
- Banners: `/api/banner`
- Bodies: `/api/bodies`
- Chapter: `/api/chapter`
- CMS: `/api/cms`
- Galleries: `/api/galleries`
- Gallery Images: `/api/galleries-image`
- Initiatives: `/api/initiatives`
- Mission: `/api/mission`
- Objective: `/api/objective`
- Organization: `/api/organization`
- Roadmap: `/api/roadmap`
- ActionPoints: `/api/actionpoints`

Each resource supports:
- `GET /` (list)
- `GET /:id` (get by id)
- `POST /` (create)
- `PUT /:id` (update)
- `DELETE /:id` (delete)

## File Upload
- `POST /api/upload` (form-data, field: `image`)
- Returns `{ url, filename }` for use in resource creation (e.g., banner image)

## Contact/Email
- `POST /api/contact` (body: `{ name, email, message }`)
- Sends email to admin

## Example: Create Banner with Image
1. Upload image: `POST /api/upload` (get `url`)
2. Create banner: `POST /api/banner` with `{ title, image: <url>, ... }`

## CORS/Frontend Integration
- CORS is enabled for `http://localhost:3000` and `http://localhost:5173` by default
- Use fetch/axios from your frontend to call these endpoints
- For protected endpoints, include JWT in `Authorization` header

## Error Handling
- All errors return `{ status: false, message, data: [] }`

## More
- For relationships (e.g., gallery images), use `/api/galleries/:id` and `/api/galleries-image?mysql_gallery_id=<gallery_mysql_id>`
- For custom queries, extend controllers as needed 