
const e = React.createElement;

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      range:  [
        { column: 1, selected: [], attribute: 'price', name: 'Price' },
        { column: 2, selected: [], attribute: 'size', name: 'Carat Weight' }
      ],
      multiples: [
        {
          column: 1, selected: [], attribute: 'shape', name: 'Shape', choices: ['round', 'pear', 'oval', 'heart', 'princess', 'cushion', 'radiant', 'asscher', 'marquise']
        },
        {
          column: 1, selected: [], attribute: 'color', name: 'Color', choices: ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'M-Z', '彩钻']
        },
        {
          column: 1, selected: [], attribute: 'clarity', name: 'Clarity', choices: ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1']
        },
        {
          column: 1, selected: [], attribute: 'certificate', name: 'Certificate' , choices: ['IGI', 'HRD', 'GIA']
        },
        {
          column: 2, selected: [], attribute: 'cutGrade', name: 'Cut Grade', choices:  ['EX', 'VG', 'G', 'F']
        },
        {
          column: 2, selected: [], attribute: 'polish', name: 'Polish', choices: ['EX', 'VG', 'G', 'F']
        },
        {
          column: 2, selected: [], attribute: 'symmetry', name: 'Symmetry', choices: ['EX', 'VG', 'G', 'F']
        },
        {
          column: 2, selected: [], attribute: 'fluorescence', name: 'Fluorescence', choices: ['极强', '强', '中', '弱', '无']
        }
      ]
    };
  }

  search = () => {
    let query = {};
    this.state.range.forEach(r => {
      if (r.selected.length > 0) {
        query[r.attribute] = { '$or': r.selected.map(s => s.range) }
      }
    });
    if (this.state.selectedDistricts.length > 0) {
      query['district'] = this.state.selectedDistricts
    }
    let metro = this.state.metro ?
      Object.keys(this.state.metro)
        .reduce((aggre, key) => aggre.concat(this.state.metro[key].selected), []) : null
    if (metro) {
      query['metro'] = metro;
    }
    query["$limit"] = 15;
    let sort = $('#sorting').val();
    query.type = { '$in': getType() }
    if (this.state.q) {
      query.q = { '$like': "%" + this.state.q + "%" };
    }
    if (this.state.compoundName) {
      query.compoundName = this.state.compoundName;
    }
    query['$sort'] = sort == "createdAt" ? { createdAt: -1 } :
      sort == "price1" ? { price: 1 } :
        sort == "price2" ? { price: -1 } : { size: -1 }


    sessionStorage.setItem('query', JSON.stringify(query))
    const apartmentService = client.service("apartments");
    apartmentService.find({ query }).then(response => {
      window.displayHouse(response)
    });
  }

   toogle = ( name, choice) => {
    let att = this.state.multiples.find(m => m.name === name )
    if (att.selected.indexOf(choice) >= 0) {
      att.selected.splice(att.selected.indexOf(choice), 1)
    } else {
      att.selected.push(choice)
    }
    this.setState({ multiples: this.state.multiples })
  }


  componentWillMount() {
    let request = {
      query: { $limit: 800 }
    };
    //this.setState({ range: range })
  }

  render() {
    if (!this.state.range) {
      return (
        <div style={{ padding: 32 }} className="cz-sidebar rounded-lg box-shadow-lg">
          <div className="skeleton-pulse" style={{ height: 30 }} > </div>

          <div className="skeleton-pulse" style={{ height: 250 }}> </div>

          <div className="skeleton-pulse" style={{ height: 50 }}> </div>

          <div className="skeleton-pulse" style={{ height: 100 }}> </div>

          <div className="skeleton-pulse" style={{ height: 50 }}> </div>

          <div className="skeleton-pulse" style={{ height: 20 }}> </div>
          <div className="skeleton-pulse" > </div>

        </div>
      )
    }
    return (
      <div id="shop-sidebar" className=" rounded-lg ">
        <div class="row pt-4">
          {
            [1, 2].map(index =>

              <div className="widget cz-filter  mb-grid-gutter col-lg-6 col-sm-6">
                {
                  this.state.range.filter(r => r.column === index).map(att =>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      <h3 className="widget-title">{att.name}</h3>
                      <ul className="widget-list cz-filter-list list-unstyled pt-1" style={{ flex: 1, maxHeight: '12rem' }} data-simplebar="init" data-simplebar-auto-hide="false"><div className="simplebar-wrapper" style={{ margin: '-4px -16px 0px 0px' }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div>

                        <div className="simplebar-mask">

                          <div className="simplebar-offset" style={{ right: -20, bottom: 0 }}><div className="simplebar-content-wrapper" style={{ height: "auto", paddingRight: 8, paddingBottom: 0, overflow: "hidden" }}>

                            <div className="simplebar-content">

                            <div class="widget">
                              <div class="cz-range-slider" data-start-min="250" data-start-max="680" data-min="0" data-max="1000" data-step="1">
                            
                                <div class="d-flex">
                                  <div style={{ maxWidth: 150}} class="w-50 pr-2 mr-2">
                                    <div class="input-group input-group-sm">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                        {
                                          att.attribute === 'price' ? '€' : 'ct'
                                        }</span>
                                      </div>
                                      <input class="form-control cz-range-slider-value-min" type="text" />
                                    </div>
                                  </div>
                                  <div style={{ maxWidth: 150}} class="w-50 pl-2">
                                    <div class="input-group input-group-sm">
                                      <div class="input-group-prepend">
                                        <span class="input-group-text">
                                        {
                                          att.attribute === 'price' ? '€' : 'ct'
                                        }</span>
                                      </div>
                                      <input class="form-control cz-range-slider-value-max" type="text" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
 
                            </div></div></div></div> 

                        <div className="simplebar-placeholder" style={{ width: 'auto', height: 812 }} ></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar simplebar-visible" style={{ transform: 'translate3d(0px, 0px, 0px)', display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar simplebar-visible" style={{ height: 46, transform: 'translate3d(0px, 142px, 0px)', display: 'block' }}></div></div></ul>
                    </div>)
                }

                {
                  this.state.multiples.filter(r => r.column === index).map(att =>
                    <div style={{display: 'flex', flexDirection: 'row'}}>
                      <h3 className="widget-title">{att.name}</h3>
                      <ul className="widget-list cz-filter-list list-unstyled pt-1" style={{ flex: 1, maxHeight: '12rem' }} data-simplebar="init" data-simplebar-auto-hide="false"><div className="simplebar-wrapper" style={{ margin: '-4px -16px 0px 0px' }}><div className="simplebar-height-auto-observer-wrapper"><div className="simplebar-height-auto-observer"></div></div>

                        <div className="simplebar-mask">

                          <div className="simplebar-offset" style={{ right: -20, bottom: 0 }}><div className="simplebar-content-wrapper" style={{ height: "auto", paddingRight: 8, paddingBottom: 0, overflow: "hidden" }}>

                            <div className="simplebar-content">
                            {
                              att.choices.map(c => 
                                <a　onClick={() => this.toogle(att.name, c)} class={`btn-tag mr-2 mb-2 ${att.selected.indexOf(c) >= 0 ? 'active': ''}`}>
                                  {
                                    att.attribute === 'shape' ?
                                    <img style={{ height: 20, filter: att.selected.indexOf(c) >= 0 ? 'invert(1) sepia(1) saturate(0) hue-rotate(205deg)' : 'none'}} 
                                      src={`img/SVGs/shapes/${c}.svg`} />
                                    :
                                    c
                                  }
                                </a>
                              )
                            }
                            </div></div></div></div> 

                        <div className="simplebar-placeholder" style={{ width: 'auto', height: 812 }} ></div></div><div className="simplebar-track simplebar-horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar simplebar-visible" style={{ transform: 'translate3d(0px, 0px, 0px)', display: "none" }}></div></div><div className="simplebar-track simplebar-vertical" style={{ visibility: "visible" }}><div className="simplebar-scrollbar simplebar-visible" style={{ height: 46, transform: 'translate3d(0px, 142px, 0px)', display: 'block' }}></div></div></ul>
                    </div>)
                }

              </div>
            )
          }
        </div>

        {/* {
                  att.range.map((r, i) =>
                    <li
                      className={`cz-filter-item d-flex justify-content-between align-items-center mb-1 ${att.name === '房间' ? 'short' : 'middle'}`}>
                      <div className="custom-control custom-checkbox">
                        <input className="custom-control-input" type="checkbox"
                          onChange={e => {
                            if (att.selected.indexOf(r) >= 0) {
                              att.selected.splice(att.selected.indexOf(r), 1)
                            } else {
                              att.selected.push(r)
                            }
                            this.setState({ range: this.state.range }, () => this.search())
                          }}
                          id={att.attribute + i.toString()} />
                        <label className="custom-control-label cz-filter-item-text" for={att.attribute + i.toString()} >
                          {
                            r.$lte && r.$gte ? `${r.$gte}-${r.$lte}` :
                              r.$lte ? `小于${r.$lte}` :
                                r.$gte ? `大于${r.$gte}` : r.$like ? r.$like : r.$gt ? `大于r.$gt:` : ''
                          }
                        </label>
                      </div>
                    </li>
                  )
                } */}
      </div>
    )
  }
}

const domContainer = document.querySelector('#filter-container');
ReactDOM.render(e(Filter), domContainer);


