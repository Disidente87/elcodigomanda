# Configuración DNS para Vercel - elcodigomanda.com

## Pasos para configurar el dominio en Vercel:

### 1. Conectar el dominio en Vercel Dashboard
- Ve a tu proyecto en Vercel
- Navega a Settings > Domains
- Agrega `elcodigomanda.com`
- Agrega `www.elcodigomanda.com`

### 2. Configuración de DNS en tu proveedor de dominio

#### Registros A (para elcodigomanda.com):
```
Type: A
Name: @
Value: 76.76.19.76
TTL: 3600
```

#### Registros CNAME (para www.elcodigomanda.com):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

#### Registros TXT (verificación de propiedad):
```
Type: TXT
Name: @
Value: [Vercel te proporcionará este valor]
TTL: 3600
```

### 3. Verificación
- Vercel verificará automáticamente la propiedad del dominio
- Una vez verificado, el sitio estará disponible en:
  - https://elcodigomanda.com
  - https://www.elcodigomanda.com

### 4. SSL/HTTPS
- Vercel proporciona SSL automático
- Redirección automática de HTTP a HTTPS

## Notas importantes:
- Los cambios de DNS pueden tardar hasta 48 horas en propagarse
- Asegúrate de que tu proveedor de dominio soporte registros A y CNAME
- Vercel manejará automáticamente la optimización y el CDN
