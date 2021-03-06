"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var Logger = (function () {
    function Logger() {
    }
    Logger.prototype.log = function (post, r, error) {
        if (error === void 0) { error = null; }
        console.dir(r.getCommand());
        console.log(post);
        if (error) {
            console.error("HTTP communication failed: " + error);
        }
        console.log(r.getPlain());
        return this;
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQTtJQUFBO0lBaUJBLENBQUM7SUFUVSxvQkFBRyxHQUFWLFVBQVcsSUFBWSxFQUFFLENBQVcsRUFBRSxLQUEyQjtRQUEzQixzQkFBQSxFQUFBLFlBQTJCO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLEtBQUssRUFBRTtZQUNQLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQThCLEtBQU8sQ0FBQyxDQUFDO1NBQ3hEO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMxQixPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUMsQUFqQkQsSUFpQkM7QUFqQlksd0JBQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gXCIuL3Jlc3BvbnNlXCI7XG5cbi8qKlxuICogTG9nZ2VyIGNsYXNzXG4gKi9cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICAgIC8qKlxuICAgICAqIG91dHB1dC9sb2cgZ2l2ZW4gZGF0YVxuICAgICAqIEBwYXJhbSBwb3N0IHJlcXVlc3Qgc3RyaW5nIHVzZWRcbiAgICAgKiBAcGFyYW0gciBSZXNwb25zZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gZXJyb3IgZXJyb3IgbWVzc2FnZSBvciBudWxsXG4gICAgICogQHJldHVybiBjdXJyZW50IExvZ2dlciBpbnN0YW5jZSBmb3IgbWV0aG9kIGNoYWluaW5nXG4gICAgICovXG4gICAgcHVibGljIGxvZyhwb3N0OiBzdHJpbmcsIHI6IFJlc3BvbnNlLCBlcnJvcjogc3RyaW5nIHwgbnVsbCA9IG51bGwpOiBMb2dnZXIge1xuICAgICAgICBjb25zb2xlLmRpcihyLmdldENvbW1hbmQoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHBvc3QpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEhUVFAgY29tbXVuaWNhdGlvbiBmYWlsZWQ6ICR7ZXJyb3J9YCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coci5nZXRQbGFpbigpKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuIl19