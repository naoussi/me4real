import React from 'react'
import './adminstyle.css'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import tasklists from 'markdown-it-task-lists'
import { Form, Button, Spinner } from 'react-bootstrap'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../action/blog'
const MOCK_DATA = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it."

function mapStateToProps(state) {
    return {
        isSaving: state.news.isSaving,
        news: state.news.news,
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

// import content from './content.js';

class AddBlog extends React.Component {
    mdEditor = null
    mdParser = null
    constructor(props) {
        super(props)
        this.mockd = props.description || ""
        this.state = {
            title: '',
            description: "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it.",
            image: null,
            rank: 1,
        }
        this.last = ""
        // initial a parser
        this.mdParser = new MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
            // highlight: function (str, lang) {
            //     if (lang && hljs.getLanguage(lang)) {
            //         try {
            //             return hljs.highlight(lang, str).value
            //         } catch (__) { }
            //     }
            //     return '' // use external default escaping
            // }
        })
            .use(emoji)
            .use(subscript)
            .use(superscript)
            .use(footnote)
            .use(deflist)
            .use(abbreviation)
            .use(insert)
            .use(mark)
            .use(tasklists, { enabled: this.taskLists })
        this.renderHTML = this.renderHTML.bind(this)
    }
    handleEditorChange = ({ html, text }, event) => {
        this.setState({ description: text })
        console.log('handleEditorChange', html, text, event)
    }
    handleImageUpload(file, callback) {
        const reader = new FileReader()
        reader.onload = () => {
            const convertBase64UrlToBlob = (urlData) => {
                let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1]
                let bstr = atob(arr[1])
                let n = bstr.length
                let u8arr = new Uint8Array(n)
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n)
                }
                return new Blob([u8arr], { type: mime })
            }
            const blob = reader.result
            console.log("blod is ", blob)
            fetch(`http://ec2-3-18-187-103.us-east-2.compute.amazonaws.com/api/images/`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({ image: blob }),
            })
                .then((response) => response.json())
                .then(resp => {
                    console.log("response is ", resp)
                    callback(resp.result)

                })
                .catch(err => console.log("rrr ", err))

            // setTimeout(() => {
            //     // setTimeout 模拟异步上传图片
            //     // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
            //     const uploadedUrl = 'https://avatars0.githubusercontent.com/u/21263805?s=40&v=4'
            //     callback(uploadedUrl)
            // }, 1000)
        }
        reader.readAsDataURL(file)
    }
    renderHTML(text) {
        // 模拟异步渲染Markdown
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.mdParser.render(text))
            }, 1000)
        })
    }
    onBeforeClear = () => {
        return new Promise((resolve, reject) => {
            const result = window.confirm('Are you sure you want to clear your markdown :-)')
            const toClear = result ? true : false
            resolve(toClear)
            // custom confirm dialog pseudo code
            // YourCustomDialog.open(() => {
            //   // confirm callback
            //   resolve(true)
            // }, () => {
            //   // cancel callback
            //   resolve(false)
            // })
        })
    }

    //check for fle type before uploading
    handleFile = e => {
        // this.setState({image: e.target.files[0]})
        let reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
        // let data = new FormData()
        // data.append('file', e.target.files[0])
        // console.log('data is ', data)
        reader.onload = e => this.setState({ image: e.target.result })
    }

    //check for selected file before llowing upload
    handleSubmit = event => {

        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        if (this.props.newsItem) {
            this.props.handleAddBlog({ image: this.state.image, title: this.state.title, description: this.state.description, filename: this.state.filename, rank: this.state.rank, id: this.props.newsItem._id }, true)
        }
        else {
            this.props.handleAddBlog({ image: this.state.image, title: this.state.title, description: this.state.description, filename: this.state.filename, rank: this.state.rank }, false)

        }

    };
    componentDidMount() {
        if (this.props.blogItem) {
            this.mockd = this.props.blogItem.description;
            this.setState({ title: this.props.blogItem.title, description: this.props.blogItem.description, rank: this.props.blogItem.rank, image: this.props.blogItem.image })
        }
    }
    render() {
        return (
            <div >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} name="title" placeholder="img title" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Rank</Form.Label>
                    <Form.Control type="text" defaultValue={this.state.rank} onChange={(e) => this.setState({ rank: e.target.value })} name="rank" placeholder="img title" />
                </Form.Group>

                <Form.Group controlId="exampleForm.imageupload">
                    <Form.Label>Thumbnail</Form.Label>
                    <Form.Control type="file" onChange={this.handleFile} />
                </Form.Group>

                <section style={{ height: "500px" }}>
                    <MdEditor
                        ref={node => this.mdEditor = node}
                        value={this.mockd}
                        style={{ height: '400px' }}
                        renderHTML={this.renderHTML}
                        config={{
                            view: {
                                menu: true,
                                md: true,
                                html: true,
                            },
                            imageUrl: 'https://octodex.github.com/images/minion.png'
                        }}
                        onChange={this.handleEditorChange}
                        onImageUpload={this.handleImageUpload}
                        onBeforeClear={this.onBeforeClear}
                    />
                </section>
                <div className="pull-right">
                    {!this.props.isSaving ?
                        <Button type="submit" onClick={this.handleSubmit} variant="warning" className="pull-right">Submit</Button>
                        : <Button variant="warning" disabled>
                            <Spinner
                                as="span"
                                animation="grow"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Uploading...
                                </Button>
                    }
                </div>

            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog)