var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var tasksRouter = require('./routes/tasks');
var authRouter = require('./routes/auth');
var paymentRouter = require('./routes/payment');
var shipmentRouter = require("./routes/shipment");
var operationsRouter  = require("./routes/operations");

var Sentry = require("@sentry/node");
var Tracing = require("@sentry/tracing");

var app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

Sentry.init({
    dsn: "https://fecd748179974a129655ab4c63a71724@o1059754.ingest.sentry.io/6109179",
    integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Tracing.Integrations.Express({ app }),
    ],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
});

// RequestHandler creates a separate execution context using domains, so that every
// transaction/span/breadcrumb is attached to its own Hub instance
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());
app.use(Sentry.Handlers.errorHandler());

app.use('/auth', authRouter);
app.use('/', indexRouter);
app.use('/tasks', tasksRouter);
app.use('/payment', paymentRouter);
app.use('/shipment', shipmentRouter);
app.use('/operations', operationsRouter);
app.listen(process.env.PORT || 8001, function () {
    console.log('Running');
})
module.exports = app;
