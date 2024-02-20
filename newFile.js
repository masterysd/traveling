/* __placeholder__ */
export default (await import('vue')).defineComponent({
data() {
return {
slide: 0,
sliding: null
};
},
methods: {
onSlideStart(slide) {
this.sliding = true;
},
onSlideEnd(slide) {
this.sliding = false;
}
}
});
