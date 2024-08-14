# ¡B Life Prueba Técnica! ✨

¡Hola! 👋 En este ReadMe se explica de forma detallada el "stack" de
tecnologías utilizadas en el desarrollo de ésta aplicación, así como las
instrucciones que se deben de seguir para ejecutarla en un servidor local.

# Stack de Tecnologías 🧠

|           | Versión   | ¿Más información?                               |
| --------- | --------- | ----------------------------------------------- |
| REACT     | `18.0.0`  | [Página principal](https://stripe.com/docs/api) |
| NEXTJS    | `14.2.4`  | [Página principal](https://nextjs.org/)         |
| TAILWIND  | `^3.4.1`  | [Página principal](https://tailwindcss.com/)    |
| SHADCD/UI | `@latest` | [Página principal](https://ui.shadcn.com)       |

# Dependencias ⚙️

En adición al "stack" de arriba listado, utiliza diferentes
"paquetes" de archivos para su correcto funcionamiento. El listado de todos y
cada uno de ellos lo puedes encontrar en el archivo **package.json** en éste
directorio.

# Requerimientos ⚡

Es imperativo que se instale el siguiente software y en el orden que se muestra
a continuación:

| Nombre            | Versión    | ¿Más información?                                                                    |
| ----------------- | ---------- | ------------------------------------------------------------------------------------ |
| NodeJS            | `^20.15.1` | [Página principal](https://nodejs.org/es/)                                           |
| NPM               | `^10.7.0`  | Se instala automáticamente con NodeJS                                                |
| PNPM              | `^9.6.0`   | Sigue las instrucciones de la [Página principal] https://pnpm.io/es/installation     |
| GIT               | `^2.35.0`  | [Windows](https://git-scm.com/download/win) -[MAC](https://git-scm.com/download/mac) |
| VisualStudio Code | `@latest`  | [Página de descarga](https://code.visualstudio.com/)                                 |

# ¿Cómo ejecutar la Aplicación? 🤯

A continuación se describe de forma ordenada los tres sencillos pasos que
se deben seguir para conseguirlo.

## 1.- Clonar el repositorio GIT

Lo primero que se debe hacer, es crear una copia del el proyecto (código fuente)
en el directorio de preferencia del ordenador. Como ejemplo en Windows se debe
abrir la "consola" (interprete de comandos) en **modo administrador** y
escribir:

> md banka ⏎
> cd banka ⏎
> git clone https://github.com/Justicary/B_Life.git .git . ⏎

## Accesar al proyecto usando VisualStudio Code

Para accesar al proyecto desde VisualStudio Code, solo falta que hagas "click"
derecho sobre la carpeta en donde se instaló y de elija la opción **"Abrir con
Code"**. Ó si así lo prefieres, puedes ejecutarlo desde la "consola" (interprete
de comandos) en **modo administrador**. Asegúrate de que estás en el directorio
en donde se encuentra el proyecto y escribe:

> code . ⏎

## 2.- Instalar dependencias(paquetes)

En segundo lugar y asumiendo que se acceso al proyecto desde VisualStudio Code.
Se deben instalar todas y cada una de las dependencias necesarias para la
correcta ejecución de la aplicación. Para esto se debe abrir la consola desde VS
Code utilizando la combinación de teclas CTRL+Ñ, asegurarse de que la consola
sea del tipo "command prompt". Después escribir:

> pnpm ó npm install ⏎

## 3.- Montar/Iniciar servidor de desarrollo local

En tercer lugar deberás crear la carpeta build con el siguiente comando

> pnpm build ⏎

para compilar el servidor localmente deberás correr el siguiente comando

> pnpm dev ⏎

En unos segundos y después de haber ejecutado alguno de los comandos anteriores, te aparecerá la liga en consola indicando la dirección LOCALHOST-PUERTO en donde se monto exitosamente la APP.
Haz Ctrl + Click en el vínculo para que lo ejecute en tu navegador de preferencia. 😂 ¡Eso es todo!.

# Desarrollado Por ❤️

**Víctor E. Mancera Gallardo**
