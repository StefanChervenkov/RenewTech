export class NavElement {
    constructor(templateFunction, renderHandler, navigate) {
        this.templateFunction = templateFunction;
        this.renderHandler = renderHandler;
        this.showView = this._showView.bind(this);
        this.navigate = navigate;
        this.logoutHandler = this._logoutHandler.bind(this);

    }

    _showView() {
        let isLoggedIn = true;
        let template = this.templateFunction(isLoggedIn, this.logoutHandler);
        this.renderHandler(template);


    }

    _logoutHandler() {
        this.navigate('/');
    }
}