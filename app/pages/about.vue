<script setup lang="ts">
  import ScrollView from '~/components/widget/ScrollView.vue';
</script>

<template>
  <div class="flex flex-col gap-2">
    <div class="card-content text-content">
      <h1 class="title-base font-bold mb-4 before-border-l relative">关于本站</h1>
      <p class="mb-2 b">
        大家好！我是一个热爱编程和技术的开发者，喜欢探索各种新技术和工具。
      </p>
      <p class="mb-2">
        我的兴趣包括前端开发、后端开发、云计算和人工智能。我喜欢通过编程解决问题，并且享受创造有用的应用程序的过程。
      </p>
      <p class="mb-2">
        在这个博客中，我将分享我的学习经验、项目心得以及对技术趋势的看法。希望我的分享能对你有所帮助！
      </p>
    </div>

    <scrollView />
      
 

    <div class="card-content text-content">
      <h1 class="title-base font-bold before-border-l relative">
        我的简历
      </h1>
      <div class=" sm:overflow-x-auto  border-gray-100">
        <table class="border-collapse border-2 border-gray-100 ...">
          <tr>
            <th class="border-2 border-gray-300 py-2 px-4">学校</th>
            <th class="border-2 border-gray-300 py-2 px-4">
              天津现代职业技术学院
            </th>
            <th class="border-2 border-gray-300 py-2 px-4">学历</th>
            <th class="border-2 border-gray-300 py-2 px-4">专科</th>
          </tr>

          <tr>
            <th class="border-2 border-gray-300 py-2 px-4">专业</th>
            <th class="border-2 border-gray-300 py-2 px-4">软件技术</th>
            <th class="border-2 border-gray-300 py-2 px-4">政治面貌</th>
            <th class="border-2 border-gray-300 py-2 px-4">群众</th>
          </tr>
          <tr>
            <th class="border-2 border-gray-300 py-2 px-4">个人方向</th>
            <th class="border-2 border-gray-300 py-2 px-4">前端</th>
            <th class="border-2 border-gray-300 py-2 px-4">Github</th>
            <th class="border-2 border-gray-300 py-2 px-4">
              https://github.com/ruaeva
            </th>
          </tr>
          <tr>
            <th class="border-2 border-gray-300 py-2 px-4">邮箱</th>
            <th class="border-2 border-gray-300 py-2 px-4">
              7uuyucu@gmail.com
            </th>
            <th class="border-2 border-gray-300 py-2 px-4">-----------</th>
            <th class="border-2 border-gray-300 py-2 px-4">-----------</th>
          </tr>
        </table>
      </div>

      
      <div class="">
        <!--  
        <h1 class="title-sub">📚 主修课程</h1>
        <p class="font-bold px-4">C 语言程序设计、Java 程序设计、PHP 程序设计、SQL 数据库基础、HTML、JavaScript、CSS 基础、Linux 操作系统、网络组建与维护、Android 移动开发等</p>
       --> 
        <h1 class="title-sub">💻 专业技能</h1>
        <ul class="list-disc pl-4">
          <li>精通Pycharm、VScode、Navicat、IDEA、Photoshop等软件的安装与卸载</li>
          <li>熟悉JavaScript、SpringBoot、Mybatis、Java、Python、Bootstrap等单词的拼写</li>
          <li>掌握Windows、Linux、MacOS、IOS、Android等系统的开关机</li>
          <li>求一份吃得饱的工作！(•́ ₃ •̀)，哈哈哈，好啦，下面才是重点！！！😁😁😁</li>
        </ul>
        <div class="border-gray-800 border-t-2 border-dashed my-6" />
        <ul class="list-disc pl-4">
          <li>熟练掌握 HTML5、CSS3、JavaScript（ES6+）等前端基础技术，熟悉 Vue3 核心特性, 包括响应式原理（ref/reactive）、组合式 API
（setup、hooks 封装）及组件通信机制；</li>
          <li>掌握 TypeScript，深入理解类型系统、泛
型、装饰器等核心特性，实现项目类型安全与可维护性提升。</li>
          <li>具备组件化开发思维，能将 UI 拆解为高复用组件；</li>
          <li>基于 Uni-app 开发过跨端应用（微信小程序/H5/App），理解多端兼容与性能优化要点</li>
          <li>了解SpringBoot+MyBatis Plus的基础应用，能按照RESTful规范独立完成简单的CRUD接口设计和开发</li>
          <li>熟悉Linux操作系统基本命令使用及其相关配置。</li>
          <li>掌握 SQL 数据库基本操作，具备数据查询、管理与维护能力，可配合前后端协同完成数据交互功能。</li>
          <li>熟练掌握 Webpack、Vite 等前端构建工具，理解前端工程化体系，可独立编写构建配置并完成项目打包优化。</li>
          <li>熟练使用 Git 及 Gitee 等版本控制工具，遵循团队协作流程与代码规范（如 ESLint），保障代码质量与项目可维护性。</li>
          <li>了解浏览器渲染机制、重绘与回流原理，掌握常见前端性能优化策略，提升页面加载速度与用户体验。关注用户体验与交互设计，能够
结合用户需求优化操作流程，提升产品易用性与可用性。
</li>
        </ul>


      </div>
      <div>
        <h1 class="title-sub">🛠️ 工作实践</h1>
        <h2 class="font-bold">天津某公司数字孪生业务 2025-6 ~ 2025-8 UE5</h2>
        <p> </p>

        <h2 class="font-bold">天津某外包 2025-8 ~2026-1 前端</h2> 
        <ul class="list-disc pl-4">
          <li>参与开发了一个基于 Vue3 和 Uni-app 的跨端应用，负责前端页面设计与功能实现，提升了用户体验和界面美观度；</li>
          <li>独立完成了一个基于 SpringBoot 和 MyBatis Plus 的后端接口设计与开发，实现了用户管理、数据查询等核心功能；</li>
          <li>在项目中使用 Git 进行版本控制，遵循团队协作流程，保障代码质量与项目可维护性；</li>
          <li>通过性能优化策略提升了页面加载速度和用户体验，获得了用户的积极反馈。</li>
          </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
