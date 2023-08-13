# Issue

Since the `13.4.8` release, wrapping next components from external package does not work anymore.

# How to reproduce

### 1 - Go to  `/my-package`

- Set next version in `package.json`.  
- ```bash
  npm i
  npm run registry:compile
  ```
- ```bash
  npm run dev
  ```
- Go to `http://localhost:1001/`, see the below page

  ![my package home](github/package-page.png?raw=true)

### 2 - Go to  `/my-app`

- Remove `"my-package": 1.0.0` line in `package.json`.
- Set next version in `package.json`.
- ```bash
  npm i
  sh ../install.sh
  ```
- Add back `"my-package": 1.0.0` line in `package.json`.
- ```bash
  npm run dev
  ```
- Go to `http://localhost:1002/`, see the below page

  - next <= 13.4.7

    ![my app home ok](github/app-page-ok.png?raw=true)

  - next >= 13.4.8

    ![my app home ok](github/app-page-ko.png?raw=true)
