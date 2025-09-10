# linkKodkod project
אתר שמאפשר לראות פוסטים של אנשים אחרים וליצור פוסטים בעצמך עם שרת לוקאלי וצד קליינט של react
## תיאור הפרויקט
פרויקט linkKodkod מדמה אתר בסגנון לינקדאין:
- **מערכת אימות** עם שם משתמש וסיסמה באמצעות bcrypt
- **צפייה בפוסטים**
- **יצירת פוסטים**
- **חיפוש פוסטים לפי מזהים שונים**
- **אחסון לוקאלי** בקובץ json מקומי
## 📁 מבנה הפרויקט
```

linkKodkod/
|
├──📁client/
```

### התקנת תלויות

```
# client side
npm i react react-router

# server side
npm i express dotenv cors bcrypt jsonwebtoken
```
### הרצת הפרויקט
```bash
# הרצת השרת (טרמינל ראשון)
cd server
node --watch server

# הרצת הקליינט (טרמינל שני)
cd client
npm run dev
```
