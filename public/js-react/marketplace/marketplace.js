dependenciesLoader(["React", "ReactDOM", "$", "_", "Loader"], function(){
    function headerSlideshow(){
        var blocks = $("#headerSlideshow .blocks .block");
        $("#headerSlideshow .blocks").css({
            minWidth: $(window).width(),
            maxWidth: $(window).width(),
            width: $(window).width()
        });

        var window_focus = true;
        $(window).focus(function() {
            window_focus = true;
        }).blur(function() {
            window_focus = false;
        });

        window.setInterval(function(){
            if(window_focus){
                var firstItem = $("#headerSlideshow .blocks .block").first().clone();

                $("#headerSlideshow .blocks").append(firstItem);

                var marginLeft = parseInt($("#headerSlideshow .blocks .block").first().css('width'))*-1*1.5-4.5;
                $("#headerSlideshow .blocks .block").first().animate({
                    marginLeft: marginLeft + "px",
                    opacity: "0.5"
                }, 300, 'easeInOutBack');

                window.setTimeout(function(){
                    $("#headerSlideshow .blocks .block").first().remove();
                }, 600);
            }
        }, 2000);
    }

    headerSlideshow();

    $(window).resize(function(){
        $("#headerSlideshow .blocks").css({
            minWidth: $(window).width(),
            maxWidth: $(window).width(),
            width: $(window).width()
        });
    });

    // Displays the carousel
    var HeaderCarousel = React.createClass({
        displayName: "HeaderCarousel",
        getInitialState: function(){
            return {
                loading: false,
                blocks: []
            };
        },
        componentDidMount: function(){
            var target = this;
                target.setState({loading: true});

            Synchronise.Cloud.run("marketPlaceHeaderCarousel", {cacheFirst: true}, {
                success: function(data){
                    target.setState({
                        blocks: data.blocks
                    });
                },
                error: function(err){
                    new ModalErrorParse(err);
                },
                always: function(){
                    target.setState({loading: false});
                }
            });
        },
        render: function(){
            return (
                <div id="headerSlideshow">
                    <div className="arrowLeft arrows"><i className="fa fa-arrow-circle-left"></i></div>
                    <div className="arrowRight arrows"><i className="fa fa-arrow-circle-right"></i></div>

                    <div className="blocks">
                        {this.state.blocks.map(function(row, index){
                            return <HeaderSlideshowBlock id={row.id} type={row.type} key={"HeaderSlideshowBlock"+row.id+index}/>;
                        })}
                    </div>
                </div>
            );
        }
    });

    // Display one item of the carousel of the Header
    // Props:
    // - (string)id: the id of the item to display
    // - (string)type: the type of the item to display (project, collection...)
    var HeaderSlideshowBlock = React.createClass({
        displayName: "HeaderSlideshowBlock",
        render: function(){
            var item = "";
            switch (this.props.type) {
                case "project":
                    item = <HeaderSlideshowBlockProject id={this.props.id}/>;
                    break;
            }

            return (
                <div className="block">{item}</div>
            );
        }
    });

    // Displays an item of the carousel of type project
    // - (string)id: the id of the project
    var HeaderSlideshowBlockProject = React.createClass({
        getInitialState: function(){
            return {
                loading: false,
                backgroundColor: "",
                logoUrl: "",
                colorText: "",
                nameProject: "",
                failed: false
            };
        },
        componentDidMount: function(){
            var target = this;
                target.setState({loading: true});

            Synchronise.Cloud.run("getProject", {id_project: this.props.id, cacheFirst: true}, {
                success: function(data){
                    if(data){
                        target.setState({
                            backgroundColor: data.bg_color,
                            logoUrl: data.icon,
                            colorText: data.txt_color,
                            nameProject: data.name
                        });
                    }else{
                        target.setState({
                            failed: true
                        });
                    }
                },
                error: function(err){
                    new ModalErrorParse(err);
                },
                always: function(){
                    target.setState({loading: false});
                }
            });
        },
        render: function(){
            var content = "";
            if(this.state.loading){
                content = (<div><Loader/></div>);
            }else if(!this.state.failed){
                content = (
                    <a href={"/marketplace/project/"+this.props.id} alt={this.state.nameProject+" project page"}>
                        <div className="card" style={{background: this.state.backgroundColor}}>
                            <div className="logoProject">
                                <img src={this.state.logoUrl} />
                            </div>
                            <div className="nameProject">
                                <h3 style={{color: this.state.colorText}}>{this.state.nameProject}</h3>
                            </div>
                        </div>
                    </a>
                );
            }
            return content;
        }
    });

    // Displays the MarketPlace
    var Marketplace = React.createClass({
        displayName: "Marketplace",
        getInitialState: function(){
            return {};
        },
        componentDidMount: function(){
            Synchronise.LocalStorage.set("visitedMarketplace", true);
        },
        render: function(){
            return (
                <div>
                    <HeaderCarousel/>
                </div>
            );
        }
    });

    ReactDOM.render(<Marketplace/>, document.getElementById('Marketplace'));
});
