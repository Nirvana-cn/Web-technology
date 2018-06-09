<template>
    <!--这是一个图片轮播组件，props中需要传入一个parameter对象，包含{images:[包含图片类名的数组],width:图片宽度,height:图片高度}-->
    <div id="page">
        <h2>{{message}}</h2>
        <div class="container">
            <div class="wrapper">
                <div class="content">
                    <figure class="slide" v-for="pic in parameter.images">
                        <i :class="pic"></i>
                    </figure>
                </div>
            </div>
            <div class="time"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {
                message: 'This is picture loop',
                current: 1,
                content: '',
                time: ''
            }
        },
        computed: {
            count() {
                return this.$props.parameter.images.length
            }
        },
        props: [
            'parameter'
        ],
        mounted() {
            $('.wrapper').css({'width': this.$props.parameter.width, 'height': this.$props.parameter.height});
            $('figure').css({'width': this.$props.parameter.width, 'height': this.$props.parameter.height});
            this.content = $('.content');
            this.time = $('.time');
            this.content.css({'width': 680 * this.count, 'height': this.$props.parameter.height});
            setInterval(this.loop, 5000)
            this.startTimeIndicator(5000)
        },
        methods: {
            startTimeIndicator(during) {
                this.time.animate({
                    width: this.$props.parameter.width
                }, during)
            },
            loop() {
                this.time.stop().css('width', 0);
                let distance = 680 * this.current;
                if (this.current === 5) {
                    this.content.css({'transition': 'all 2s linear', 'transform': 'translateX(-' + distance + 'px)'});
                    this.current = 1;
                    setTimeout(() => {
                        this.content.css({'transition': 'all 0s linear', 'transform': 'translateX(0px)'});
                        this.startTimeIndicator(3000);
                    }, 2000);
                    return;
                }
                this.content.css({'transition': 'all 2s linear', 'transform': 'translateX(-' + distance + 'px)'});
                this.current++;
                setTimeout(() => {
                    this.startTimeIndicator(3000)
                }, 2000);
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    .wrapper
        position: relative
        border: 1px solid #000;
        overflow: hidden
        .content
            position: absolute
            figure
                display: inline-block
                i
                    display: inline-block

    .time
        width: 0;
        height: 5px;
        background: #faa;
</style>