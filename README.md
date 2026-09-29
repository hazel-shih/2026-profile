# 2026 Portfolio

純靜態的一頁式作品集，無需安裝相依套件。

## 在本機啟動

在此資料夾執行：

```bash
python3 -m http.server 4173
```

接著開啟 [http://localhost:4173](http://localhost:4173)。以 `Ctrl + C` 停止伺服器。

## 部署至 GitHub Pages

1. 建立 GitHub repository，並將此資料夾內容推送到 `main` 分支。
2. 到 GitHub 的 **Settings → Pages**，在 **Build and deployment** 選擇 **GitHub Actions**。
3. 推送至 `main` 後，`.github/workflows/deploy-pages.yml` 會自動發布網站。

若這個資料夾尚未初始化 Git，可在建立好空白 repository 後執行（將網址換成自己的 repository）：

```bash
git init
git add .
git commit -m "Create portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

所有素材使用相對路徑，因此會同時適用於本機與 GitHub Pages 的專案子路徑。
