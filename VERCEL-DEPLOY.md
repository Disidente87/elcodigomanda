# 🚀 Deploy en Vercel - elcodigomanda.com

## Configuración Automática

### 1. Conectar con Vercel
```bash
# Instalar Vercel CLI (si no lo tienes)
npm i -g vercel

# Login en Vercel
vercel login

# Deploy inicial
vercel

# Deploy a producción
vercel --prod
```

### 2. Configuración del Dominio

#### En Vercel Dashboard:
1. Ve a tu proyecto
2. Settings > Domains
3. Agrega: `elcodigomanda.com`
4. Agrega: `www.elcodigomanda.com`

#### En tu proveedor de dominio:
```
# Registro A
Type: A
Name: @
Value: 76.76.19.76
TTL: 3600

# Registro CNAME
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 3. Variables de Entorno
Configura estas variables en Vercel Dashboard > Settings > Environment Variables:

```bash
NEXT_PUBLIC_SITE_URL=https://elcodigomanda.com
GOOGLE_AI_API_KEY=tu_api_key_aqui
```

### 4. Comandos Útiles

```bash
# Deploy de desarrollo
npm run vercel-dev

# Build para producción
npm run vercel-build

# Deploy a producción
npm run deploy

# Ver logs
vercel logs

# Ver estado del proyecto
vercel ls
```

### 5. Características del Deploy
- ✅ **SSL automático** con Let's Encrypt
- ✅ **CDN global** para mejor rendimiento
- ✅ **Auto-scaling** según tráfico
- ✅ **Preview deployments** para cada PR
- ✅ **Analytics integrados** (opcional)

### 6. Monitoreo
- **Performance**: Vercel Analytics
- **Uptime**: Status page automático
- **Logs**: Acceso en tiempo real
- **Metrics**: Core Web Vitals

## 🎯 URLs del Proyecto
- **Producción**: https://elcodigomanda.com
- **Preview**: https://elcodigomanda-git-main-disidente87.vercel.app
- **Dashboard**: https://vercel.com/dashboard
