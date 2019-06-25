const menuConfig = {
  title: 'Order',
  // 不包含 body
  buttonText: 'Send',
  cancellable: true
};
function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  }, config);
  // config : {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}
createMenu(menuConfig);
