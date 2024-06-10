## Personal website built with React Js and Django Ninja.

Django is a really powerful framework that encourages rapid development and design.
clean and efficient. However, it has limits when it comes to
create front-end interfaces. Django's true strength lies in
your backend development capabilities. The main factor of it is the
built-in support for creating state transfer API
representational (REST). The REST API offers great flexibility. By
Therefore, the Django REST framework is a powerful toolset,
scalable and versatile to expand the functionality of an application.
By combining React with the Django framework, we are downloading the most
part of frontend development to React framework. This allows us
leverage the strengths of each framework; React for development
frontend and Django for backend development. The basic principle to
combining React with Django is that React will consume Django's REST API
to retrieve and configure data. React will communicate with the API
Django to get the backend data needed to render
the website.

On the other hand, Django Ninja is the lightweight speedster, designed for
provide high performance and simplicity. Taking advantage of the framework
Starlette asynchronous, is perfect for projects that prioritize
speed, simplicity and real-time applications. With
Automatic API documentation and CRUD endpoint generation,
Django Ninja makes development easy with its clean syntax and
readability.

Key Features:
Quick execution:

The most notable feature of Django Ninja is its speed.
Built on the Starlette asynchronous framework, it excels in
scenarios where low latency and high concurrency are
essential.

## Automatic API documentation:

Similar to the DRF navigable API, Django Ninja generates
automatically interactive documentation for the API. This
feature serves as a time-saving tool during
the development.

## Integrated OAuth and JWT authentication:

Django Ninja comes with built-in support for OAuth authentication and
JSON Web Token (JWT), which simplifies the security process of
API. Automatic CRUD endpoints: Django Ninja simplifies
creating CRUD endpoints (Create, Read, Update, Delete)
automatically generating them for Django models, which reduces
the boilerplate code. Simplicity and readability: With a syntax
Clean and easy to read, Django Ninja is designed for
simplicity, making it an attractive option for
developers who prefer a simple and minimalist approach.

## CRUD endpoints (Create, Read, Update, Delete) example.

Creating a new post - POST request
We will start with the API route that allows clients to create a new post for a blog in the database with a POST request.

To do this, we will jump into our posts/api.py file.

## Let's add a new route - this time, it will be a POST request to the /api/posts endpoint.

```python
@api.post("posts", response={201: PostSchema})
def create_post(request, track: PostSchema):
    Post.objects.create(**track.dict())
    return post
```

## Let's break this route down line by line.

On line 1, the decorator specifies the route, and the response schema. The @api.post declaration denotes that this is a POST route. For this route, we return a HTTP 201 Created response code, along with a serialized TrackSchema object. django-ninja will take care of this serialization for us, based on the type-hinted TrackSchema defined in the previous post.

On line 2, we accept the track data from the POST request body. The request body should contain a JSON string with the fields required by the schema - title, content, and author. This is automatically converted to a PostSchema object by django-ninja (under the hood, this uses the pydantic library, similarly to FastAPI). This object is made available as the second parameter to the route method.

On line 3, we use the Django ORM to create a new Post object. The PostSchema object is converted to a dictionary - schemas have a .dict() method for this purpose. This dictionary's key/value pairs are then passed as keyword arguments to the ORM's .create() method, creating the new post in the database.
On line 4, we return the post. This is the parameter representing PostSchema, and it is automatically serialized to JSON by django-ninja.

This route will allow us to add a new post to our database, if valid JSON is provided in the request body. To test this out, we'll use a curl command (available on Linux, Mac, Git Bash, etc). You can also use an API client such as NativeRest, Bruno, Postman... to test this out.

Make sure the Django server is also running before testing this!

to continue later...

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

(!) Some chunks are larger than 500 kB after minification. Consider:

- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
