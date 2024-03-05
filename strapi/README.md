# Strapi CMS

## 🧰 Local Setup

Before you start, install all dependencies and create `.env.local` file which is .gitignored used for local dev

```
yarn
cp .env.example .env.local
```

You need postgres running locally (with correct credentials & database available). The default setup is in `.env.example`, you can override any of the variables by passing them in you `.env.local` file.

If you need to quickly setup postgres see the readme and the docker-compose file in the root of the project.

## 🚀 Development

Start the development server:

```bash
yarn dev
```

## ☁️ Deployment Setup (Secrets)

You need to generate secrets for each environment. Use the [k8-helpers](https://github.com/bratislava/k8-helpers) repo and the files in `kubernetes/base/secrets` to guide you.

When prompted, apply the secrets to given environment. You shouldn't need to add them to kustomize (they are already referenced there).

You'll need to end up with the following files inside said folder:

```
database.secret.dev.yml
database.secret.prod.yml
database.secret.staging.yml
database.yml (not used, kept for reference)
strapi.secret.dev.yml
strapi.secret.prod.yml
strapi.secret.staging.yml
strapi.yml (not used, kept for reference)
```

Most of the secrets can be generated using the
`@b64randX` or `@randX` directives (see k8-helpers README). The only exceptions are the `APP_KEYS`, which need to be 4 random, comma separated base64 strings, encoded in base64 again. To generate these, you can use the following (and paste them into the interactive prompt of k8-helpers afterwards):

```bash
echo APP_KEYS: $(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32),$(openssl rand -base64 32)
```

## Deployment

To get automatic deployments on `master` branch, uncomment the relevant section in deploy.yml.

Github pipelines will take care of deploying to correct environment based on tags. To deploy create a tag with the following prefix:

```base
dev*
staging*
prod*
```

Good practice is to use semver as suffix.

## Patches

We use [patch-package](https://github.com/ds300/patch-package) to slightly change the behavior of some packages. See the `patches` folder for more details.

When updating these packages, please run also `patch-package`:

```
yarn patch-package @strapi/plugin-users-permissions
```
