Vue.component('zk-content', {
    props:['url','parentid'],
    template: '<div></div>',
    created: function () {
        $.zkcontrol("#"+this.parentid,this.url,1);
    }
});