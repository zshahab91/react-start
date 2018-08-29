import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getDataInline} from '../../modules/actions/dataInline'
import renderHTML from 'react-render-html'
import {ButtonToolbar, Button} from 'react-bootstrap';




const mapStateToProps = ({ state }) => ({
  data: state
})

const mapDispatchToProps = dispatch => {
    return {
        getDataDispatch : (data) => {
            return dispatch(getDataInline(data))
        }
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1: `<div><p>متن معمولی</p><p><small>متن کوچک</small></p><p><big>متن بزرگ</big></p><p><mark>متن هایلایت شده</mark></p><p><strong>متن پر رنگ</strong></p><p><bold>متن پر رنگ</bold></p><p><p size="20px" color="#8a2be2" face="verdana">متن بیست پیکسلی با رنگ بنفش به شکل با فونت وردانا</p></p><p><i>متن کج</i></p><p><u><sup>یکم می‌بره بالا</sup></u></p><p><u><sub>یکم میاره پایین</sub></u></p><p><u>متن با یک خط زیرش</u></p><p>بچهٔ ناز</p><button action="/">خانه </button></div>`,
            data: `<div size="20px" style="color: red;" color="#8a2be2" face="verdana">متن بیست پیکسلی با رvb ngfcvbnدانا</div>`
        }

        this.getDataFunc = this.getDataFunc.bind(this)
    }

    getDataFunc(value) {
        this.props.getDataDispatch(value).then(
            res => {
                console.log('res is:', res.data)
                let dataHtml = res.data.innerHTML
                this.setState({data: dataHtml})
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                  <ButtonToolbar>
                    <Button bsStyle="primary" onClick={this.getDataFunc} bsSize="large">
                      Get Inline
                    </Button>
                  </ButtonToolbar>
                <div>{renderHTML(this.state.data)}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);
