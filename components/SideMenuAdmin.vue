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
          router-link(to='/dashboard-admin')
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
          router-link(to="/forms-list-admin", exact)
            i.fas.fa-chart-bar
            | &nbsp;Forms / Temps
          //- a
        //- li
        li
          a
            i.fas.fa-users-cog
            | &nbsp;Manage Packages
          //- a
        //- li
        li
          a
            i.fas.fa-project-diagram
            | &nbsp;Workflow Manage
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
            | &nbsp;Manage Lists
          //- a
        //- li
        li
          a
            i.fas.fa-users
            | &nbsp;Create / Mgr Users
          //- a
        //- li
        li
          a
            i.fas.fa-building
            | &nbsp;Company Profile
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
