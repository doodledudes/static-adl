<template lang="pug">
  aside.menu.--admin(v-bind:class="[{'visible': visible}, {'mobile': mobile}]")
    .admin-logo.is-hidden-touch
      img(src='~assets/images/logo.png', alt='Digital Reign')
    //- admin-logo
    .menu-wrap
      p.menu-label
        | Menu
      //- p
      ul.menu-list
        li
          a(href='agent-dashboard.html')
            i.fas.fa-tachometer-alt
            | &nbsp;Dashboard
          //- a
        //- li
        li
          a(href="")
            i.fas.fa-cube
            | &nbsp;In Creation
          //- a
        //- li
        li
          a(href="")
            i.fab.fa-wpforms
            | &nbsp;In Workflow
          //- a
        //- li
        li
          a(href="")
            i.fas.fa-check
            | &nbsp;Completed Forms
          //- a
        //- li
        li
          a
            i.fas.fa-chart-bar
            | &nbsp;My Forms / Templates
          //- a
        //- li
        li
          a
            i.fas.fa-users-cog
            | &nbsp;My Merges
          //- a
        //- li
        li
          a
            i.fas.fa-home
            | &nbsp;My Properties
          //- a
        //- li
        li
          a
            i.fas.fa-cogs
            | &nbsp;Upcoming Actions
          //- a
        //- li
        li
          a
            i.fas.fa-tasks
            | &nbsp;My Lists
          //- a
        //- li
      //- ul
    //- menu-wrap
  //- aside
</template>

<script>
export default {
  props: ['visible', 'mobile']
}
</script>

<style>

</style>
