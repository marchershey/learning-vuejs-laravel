<template>
    <div>
        <base-panel title="Trending Movies">
            <media-grid :media="trendingMovies" />
        </base-panel>

        <base-panel title="Trending TV Shows">
            <media-grid :media="trendingTv"></media-grid>
        </base-panel>

        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
        <base-panel title="What's Popular" link="/test">asdf</base-panel>
    </div>
</template>

<script>
import BasePanel from "@/Components/BasePanel.vue";
import MediaGrid from "@/Components/Media/HorizontalGrid.vue";
export default {
    components: { BasePanel, MediaGrid },
    props: {
        trendingMovies: Object,
        trendingTv: Object,
    },
    mounted: function () {
        this.$nextTick(function () {
            // console.log(this.trendingMovies);
        });
    },
};
</script>

<style>
</style>