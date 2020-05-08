var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

var Filter = function (_React$Component) {
  _inherits(Filter, _React$Component);

  function Filter(props) {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

    _this.search = function () {
      var query = {};
      _this.state.range.forEach(function (r) {
        if (r.selected.length > 0) {
          query[r.attribute] = { '$or': r.selected.map(function (s) {
              return s.range;
            }) };
        }
      });
      if (_this.state.selectedDistricts.length > 0) {
        query['district'] = _this.state.selectedDistricts;
      }
      var metro = _this.state.metro ? Object.keys(_this.state.metro).reduce(function (aggre, key) {
        return aggre.concat(_this.state.metro[key].selected);
      }, []) : null;
      if (metro) {
        query['metro'] = metro;
      }
      query["$limit"] = 15;
      var sort = $('#sorting').val();
      query.type = { '$in': getType() };
      if (_this.state.q) {
        query.q = { '$like': "%" + _this.state.q + "%" };
      }
      if (_this.state.compoundName) {
        query.compoundName = _this.state.compoundName;
      }
      query['$sort'] = sort == "createdAt" ? { createdAt: -1 } : sort == "price1" ? { price: 1 } : sort == "price2" ? { price: -1 } : { size: -1 };

      sessionStorage.setItem('query', JSON.stringify(query));
      var apartmentService = client.service("apartments");
      apartmentService.find({ query: query }).then(function (response) {
        window.displayHouse(response);
      });
    };

    _this.toogle = function (name, choice) {
      var att = _this.state.multiples.find(function (m) {
        return m.name === name;
      });
      if (att.selected.indexOf(choice) >= 0) {
        att.selected.splice(att.selected.indexOf(choice), 1);
      } else {
        att.selected.push(choice);
      }
      _this.setState({ multiples: _this.state.multiples });
    };

    _this.state = {
      range: [{ column: 1, selected: [], attribute: 'price', name: 'Price' }, { column: 2, selected: [], attribute: 'size', name: 'Carat Weight' }],
      multiples: [{
        column: 1, selected: [], attribute: 'shape', name: 'Shape', choices: ['round', 'pear', 'oval', 'heart', 'princess', 'cushion', 'radiant', 'asscher', 'marquise']
      }, {
        column: 1, selected: [], attribute: 'color', name: 'Color', choices: ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'M-Z', '彩钻']
      }, {
        column: 1, selected: [], attribute: 'clarity', name: 'Clarity', choices: ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1']
      }, {
        column: 1, selected: [], attribute: 'certificate', name: 'Certificate', choices: ['IGI', 'HRD', 'GIA']
      }, {
        column: 2, selected: [], attribute: 'cutGrade', name: 'Cut Grade', choices: ['EX', 'VG', 'G', 'F']
      }, {
        column: 2, selected: [], attribute: 'polish', name: 'Polish', choices: ['EX', 'VG', 'G', 'F']
      }, {
        column: 2, selected: [], attribute: 'symmetry', name: 'Symmetry', choices: ['EX', 'VG', 'G', 'F']
      }, {
        column: 2, selected: [], attribute: 'fluorescence', name: 'Fluorescence', choices: ['极强', '强', '中', '弱', '无']
      }]
    };
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var request = {
        query: { $limit: 800 }
      };
      //this.setState({ range: range })
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      if (!this.state.range) {
        return React.createElement(
          'div',
          { style: { padding: 32 }, className: 'cz-sidebar rounded-lg box-shadow-lg' },
          React.createElement(
            'div',
            { className: 'skeleton-pulse', style: { height: 30 } },
            ' '
          ),
          React.createElement(
            'div',
            { className: 'skeleton-pulse', style: { height: 250 } },
            ' '
          ),
          React.createElement(
            'div',
            { className: 'skeleton-pulse', style: { height: 50 } },
            ' '
          ),
          React.createElement(
            'div',
            { className: 'skeleton-pulse', style: { height: 100 } },
            ' '
          ),
          React.createElement(
            'div',
            { className: 'skeleton-pulse', style: { height: 50 } },
            ' '
          ),
          React.createElement(
            'div',
            { className: 'skeleton-pulse', style: { height: 20 } },
            ' '
          ),
          React.createElement(
            'div',
            { className: 'skeleton-pulse' },
            ' '
          )
        );
      }
      return React.createElement(
        'div',
        { id: 'shop-sidebar', className: ' rounded-lg ' },
        React.createElement(
          'div',
          { 'class': 'row pt-4' },
          [1, 2].map(function (index) {
            return React.createElement(
              'div',
              { className: 'widget cz-filter  mb-grid-gutter col-lg-6 col-sm-6' },
              _this2.state.range.filter(function (r) {
                return r.column === index;
              }).map(function (att) {
                return React.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'row' } },
                  React.createElement(
                    'h3',
                    { className: 'widget-title' },
                    att.name
                  ),
                  React.createElement(
                    'ul',
                    { className: 'widget-list cz-filter-list list-unstyled pt-1', style: { flex: 1, maxHeight: '12rem' }, 'data-simplebar': 'init', 'data-simplebar-auto-hide': 'false' },
                    React.createElement(
                      'div',
                      { className: 'simplebar-wrapper', style: { margin: '-4px -16px 0px 0px' } },
                      React.createElement(
                        'div',
                        { className: 'simplebar-height-auto-observer-wrapper' },
                        React.createElement('div', { className: 'simplebar-height-auto-observer' })
                      ),
                      React.createElement(
                        'div',
                        { className: 'simplebar-mask' },
                        React.createElement(
                          'div',
                          { className: 'simplebar-offset', style: { right: -20, bottom: 0 } },
                          React.createElement(
                            'div',
                            { className: 'simplebar-content-wrapper', style: { height: "auto", paddingRight: 8, paddingBottom: 0, overflow: "hidden" } },
                            React.createElement(
                              'div',
                              { className: 'simplebar-content' },
                              React.createElement(
                                'div',
                                { 'class': 'widget' },
                                React.createElement(
                                  'div',
                                  { 'class': 'cz-range-slider', 'data-start-min': '250', 'data-start-max': '680', 'data-min': '0', 'data-max': '1000', 'data-step': '1' },
                                  React.createElement(
                                    'div',
                                    { 'class': 'd-flex' },
                                    React.createElement(
                                      'div',
                                      { style: { maxWidth: 150 }, 'class': 'w-50 pr-2 mr-2' },
                                      React.createElement(
                                        'div',
                                        { 'class': 'input-group input-group-sm' },
                                        React.createElement(
                                          'div',
                                          { 'class': 'input-group-prepend' },
                                          React.createElement(
                                            'span',
                                            { 'class': 'input-group-text' },
                                            att.attribute === 'price' ? '€' : 'ct'
                                          )
                                        ),
                                        React.createElement('input', { 'class': 'form-control cz-range-slider-value-min', type: 'text' })
                                      )
                                    ),
                                    React.createElement(
                                      'div',
                                      { style: { maxWidth: 150 }, 'class': 'w-50 pl-2' },
                                      React.createElement(
                                        'div',
                                        { 'class': 'input-group input-group-sm' },
                                        React.createElement(
                                          'div',
                                          { 'class': 'input-group-prepend' },
                                          React.createElement(
                                            'span',
                                            { 'class': 'input-group-text' },
                                            att.attribute === 'price' ? '€' : 'ct'
                                          )
                                        ),
                                        React.createElement('input', { 'class': 'form-control cz-range-slider-value-max', type: 'text' })
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      ),
                      React.createElement('div', { className: 'simplebar-placeholder', style: { width: 'auto', height: 812 } })
                    ),
                    React.createElement(
                      'div',
                      { className: 'simplebar-track simplebar-horizontal', style: { visibility: 'hidden' } },
                      React.createElement('div', { className: 'simplebar-scrollbar simplebar-visible', style: { transform: 'translate3d(0px, 0px, 0px)', display: "none" } })
                    ),
                    React.createElement(
                      'div',
                      { className: 'simplebar-track simplebar-vertical', style: { visibility: "visible" } },
                      React.createElement('div', { className: 'simplebar-scrollbar simplebar-visible', style: { height: 46, transform: 'translate3d(0px, 142px, 0px)', display: 'block' } })
                    )
                  )
                );
              }),
              _this2.state.multiples.filter(function (r) {
                return r.column === index;
              }).map(function (att) {
                return React.createElement(
                  'div',
                  { style: { display: 'flex', flexDirection: 'row' } },
                  React.createElement(
                    'h3',
                    { className: 'widget-title' },
                    att.name
                  ),
                  React.createElement(
                    'ul',
                    { className: 'widget-list cz-filter-list list-unstyled pt-1', style: { flex: 1, maxHeight: '12rem' }, 'data-simplebar': 'init', 'data-simplebar-auto-hide': 'false' },
                    React.createElement(
                      'div',
                      { className: 'simplebar-wrapper', style: { margin: '-4px -16px 0px 0px' } },
                      React.createElement(
                        'div',
                        { className: 'simplebar-height-auto-observer-wrapper' },
                        React.createElement('div', { className: 'simplebar-height-auto-observer' })
                      ),
                      React.createElement(
                        'div',
                        { className: 'simplebar-mask' },
                        React.createElement(
                          'div',
                          { className: 'simplebar-offset', style: { right: -20, bottom: 0 } },
                          React.createElement(
                            'div',
                            { className: 'simplebar-content-wrapper', style: { height: "auto", paddingRight: 8, paddingBottom: 0, overflow: "hidden" } },
                            React.createElement(
                              'div',
                              { className: 'simplebar-content' },
                              att.choices.map(function (c) {
                                return React.createElement(
                                  'a',
                                  { onClick: function onClick() {
                                      return _this2.toogle(att.name, c);
                                    }, 'class': 'btn-tag mr-2 mb-2 ' + (att.selected.indexOf(c) >= 0 ? 'active' : '') },
                                  att.attribute === 'shape' ? React.createElement('img', { style: { height: 20, filter: att.selected.indexOf(c) >= 0 ? 'invert(1) sepia(1) saturate(0) hue-rotate(205deg)' : 'none' },
                                    src: 'img/SVGs/shapes/' + c + '.svg' }) : c
                                );
                              })
                            )
                          )
                        )
                      ),
                      React.createElement('div', { className: 'simplebar-placeholder', style: { width: 'auto', height: 812 } })
                    ),
                    React.createElement(
                      'div',
                      { className: 'simplebar-track simplebar-horizontal', style: { visibility: 'hidden' } },
                      React.createElement('div', { className: 'simplebar-scrollbar simplebar-visible', style: { transform: 'translate3d(0px, 0px, 0px)', display: "none" } })
                    ),
                    React.createElement(
                      'div',
                      { className: 'simplebar-track simplebar-vertical', style: { visibility: "visible" } },
                      React.createElement('div', { className: 'simplebar-scrollbar simplebar-visible', style: { height: 46, transform: 'translate3d(0px, 142px, 0px)', display: 'block' } })
                    )
                  )
                );
              })
            );
          })
        )
      );
    }
  }]);

  return Filter;
}(React.Component);

var domContainer = document.querySelector('#filter-container');
ReactDOM.render(e(Filter), domContainer);