

let socket = new WebSocket("ws://" + "localhost:8000" + "/omni/")

let content = null;


class CommentList extends React.Component{
    constructor(props) {
      super(props);
      this.state = {comment_list: [], };
    }

    componentWillMount() {
        var whole_url = window.location.href;
        var compent_list = whole_url.split('/');
        var id_name = compent_list[4];
        console.log(id_name)
        fetch("http://localhost:8000/api/comment/?q=" + id_name)
            .then(results => {
                return results.json();
            })
            .then(data => {

                let imageStyle = {width: '64px', height: '64px'};
                let cdn = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjM3ODY3YmNiNiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2Mzc4NjdiY2I2Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
                let comment_list = data.map(comment => {
                    return (
                        <div className="media">
                              <div className="media-left">
                                <img  className="media-object" data-src="holder.js/64x64" src={cdn}  style={imageStyle}/>
                              </div>
                              <div className="media-body">
                                <h5>{ comment.content }</h5>
                                { comment.timestamp }
                              </div>
                        </div>
                    )
                });
                this.setState({comment_list: comment_list});
                console.log(this.state.comment_list)
            })
    }

    componentDidMount() {
        var that = this;
       socket.onmessage = function(e) {
          let c = e.data.split("$");
          let cdn = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSI+PCEtLQpTb3VyY2UgVVJMOiBob2xkZXIuanMvNjR4NjQKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjM3ODY3YmNiNiB0ZXh0IHsgZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2Mzc4NjdiY2I2Ij48cmVjdCB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIGZpbGw9IiNFRUVFRUUiLz48Zz48dGV4dCB4PSIxMy40Njg3NSIgeT0iMzYuNSI+NjR4NjQ8L3RleHQ+PC9nPjwvZz48L3N2Zz4="
           let imageStyle = {width: '64px', height: '64px'};
           var comment = {
                  name: c[0],
                  author: c[1],
                  content: c[2],
                  timestamp: c[3],
            };
          console.log(comment);


          let comment_list = that.state.comment_list;
           comment_list.unshift(

               <div className="media">
                              <div className="media-left">
                                <img  className="media-object" data-src="holder.js/64x64" src={cdn}  style={imageStyle}/>
                              </div>
                              <div className="media-body">
                                <h5>{ comment.content }</h5>
                                { comment.timestamp }
                              </div>
                        </div>
           )
           that.setState({comment_list: comment_list});
           console.log(that.state.comment_list.length);
          // let json_c = JSON.parse(c);
          // console.log(json_c)
    }}



    render(){

        return (
            <div>
                {this.state.comment_list}
            </div>
        )
    }
}




class PostComment extends React.Component{
    constructor(props) {
      super(props);
      this.state = {content: "", };
    }

    handleChange(e){
        this.setState({
        content: e.target.value
      });
    }

    ClickPost() {
        content = this.state.content
        socket.onopen = function() {
            var whole_url = window.location.href;
            var compent_list = whole_url.split('/');
            var id_name = compent_list[4];
            var mes = {
                name: id_name,
                author: '',
                content: content
            };
            socket.send(JSON.stringify(mes));
        }
        // Call onopen directly if socket is already open
        if (socket.readyState == WebSocket.OPEN) socket.onopen();
        console.log(this.state)

    }
    render(){

        return <div>
            <input type="textarea" value={this.state.content} onChange={this.handleChange.bind(this)} />
            <button  onClick={this.ClickPost.bind(this)}>post</button>
        </div>;
    }
}
ReactDOM.render(<PostComment />, document.getElementById('post'));
ReactDOM.render(<CommentList />, document.getElementById('list'));