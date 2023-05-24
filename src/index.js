const path = require('path');
const express = require('express'); 
const handlebars  = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes/mainRoute');
const cookieParser = require('cookie-parser')

const app = express();  
const port = process.env.PORT || 5000;

// Sử dụng express-handlebars
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Truy xuất các file static 
app.use(express.static(path.join(__dirname, 'public')));

// Hiển thị những request từ client 
app.use(morgan('combined'));

// Nhận dữ liệu POST từ form
app.use(express.urlencoded({ extended: true })); 

// Sử dụng cookie parse: Để nhận dữ liệu từ cookie
app.use(cookieParser());

// Khởi tạo routers
route(app);

// Khởi tạo server
app.listen(port, () => console.log(`Server running: http://localhost:${port}`));