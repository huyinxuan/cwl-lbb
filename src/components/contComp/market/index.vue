<template>
  <main>
    <section class="symbol-section">
      <button class>自选</button>
      <button class="active">全部</button>
      <button class>主板</button>
      <button class>创业板</button>
    </section>
    <section class="search-box" :class="active?'active':''">
      <input autocomplate="off" id="search" placeholder="搜索币种" />
      <button>取消</button>
    </section>
    <section class="quote-tabs" style>
      <span class="upper active">usdt</span>
      <span class="upper">husd</span>
      <span class="upper">btc</span>
      <span class="upper">eth</span>
      <span class="upper">ht</span>
      <span class="upper">trx</span>
    </section>
    <section class="symbol-list">
      <div v-for="data in 20" :key="data">
        <dl class="l">
          <dt class="upper">
            btc
            <span>/usdt</span>
          </dt>
          <dd growing-ignore="true">24HVol 79505</dd>
        </dl>
        <dl class="m">
          <dt growing-ignore="true">10373.39</dt>
          <dd growing-ignore="true">¥71991.32</dd>
        </dl>
        <em class="r down" growing-ignore="true">-0.65%</em>
      </div>
      <dl class="no-data" style="display:none">
        <dt>
          <img
            alt="no data"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTM2cHgiIGhlaWdodD0iMTcwcHgiIHZpZXdCb3g9IjAgMCAxMzYgMTcwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4xICg3MjYzMSkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+R3JvdXAgNzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMTA0LjE4Mzk3NSUiIHgyPSI1MCUiIHkyPSIzLjA2MTYxN2UtMTUlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0VGRjVGOSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSLooYzmg4UiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLooYzmg4Ut5YWo6YOoLWNvcHktMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDcuMDAwMDAwLCAtNTM2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkwLjAwMDAwMCwgNTM2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS01IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMCAwIDE3MCAwIDE3MCAxNzAgMCAxNzAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QiPgogICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0i5pyq5qCH6aKYLTIiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02LjQyNTE5Njg1LDExLjQyMDI3NzggTDEyOC45Mjc1NzYsMTEuNDIwMjc3OCBDMTMyLjQ3NjExNSwxMS40MjAyNzc4IDEzNS4zNTI3NzMsMTQuMjk2OTM2NSAxMzUuMzUyNzczLDE3Ljg0NTQ3NDcgTDEzNS4zNTI3NzMsMTYyLjk3NTU5MSBDMTM1LjM1Mjc3MywxNjYuNTI0MTI5IDEzMi40NzYxMTUsMTY5LjQwMDc4OCAxMjguOTI3NTc2LDE2OS40MDA3ODggTDYuNDI1MTk2ODUsMTY5LjQwMDc4OCBDMi44NzY2NTg2MiwxNjkuNDAwNzg4IC00Ljg5NDQ5OTkyZS0xNSwxNjYuNTI0MTI5IC01LjMyOTA3MDUyZS0xNSwxNjIuOTc1NTkxIEwwLDE3Ljg0NTQ3NDcgQy00LjM0NTcwNTk5ZS0xNiwxNC4yOTY5MzY1IDIuODc2NjU4NjIsMTEuNDIwMjc3OCA2LjQyNTE5Njg1LDExLjQyMDI3NzggWiIgaWQ9IuefqeW9oiIgZmlsbD0idXJsKCNsaW5lYXJHcmFkaWVudC0xKSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMC45MTQyOTQ0LDIwLjkzNzE3NiBMMTIyLjQ5MjUxNSwyMC45MzcxNzYgQzEyMy44MDQyOTMsMjAuOTM3MTc2IDEyNC44Njc2OTksMjIuMDM5ODE0MyAxMjQuODY3Njk5LDIzLjM5OTk4NzYgTDEyNC44Njc2OTksMTUyLjI3MDM3MSBMOC41Nzg2OTY4OSwxNTIuMjcwMzcxIEw4LjU3ODY5Njg5LDIzLjM5OTk4NzYgQzguNTc4NTE2ODIsMjIuMDU1Njg0MiA5LjYxODAwMTgzLDIwLjk1OTU4MTEgMTAuOTE0Mjk0NCwyMC45MzcxNzYgWiIgaWQ9Iui3r+W+hCIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNGMEY1RjkiIHg9IjI1IiB5PSI4NSIgd2lkdGg9IjgzLjc1ODgxNzkiIGhlaWdodD0iMTAuMTcwMzA5NyI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSLnn6nlvaIiIGZpbGw9IiNGMEY1RjkiIHBvaW50cz0iMjUuMjU3MTQyOSAxMDYuODU3MTQzIDEwOS4wMTU5NjEgMTA2Ljg1NzE0MyAxMDkuMDE1OTYxIDExNy4wMjc0NTMgMjUuMjU3MTQyOSAxMTcuMDI3NDUzIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IuefqeW9oiIgZmlsbD0iI0YwRjVGOSIgcG9pbnRzPSIyNS4yNTcxNDI5IDEzMC4xNzE0MjkgMTA5LjAxNTk2MSAxMzAuMTcxNDI5IDEwOS4wMTU5NjEgMTQwLjM0MTczOCAyNS4yNTcxNDI5IDE0MC4zNDE3MzgiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOTUuMTMyODYxMiw4LjU3MjcwNjQxIEw4Mi4wNjc5NzAyLDguNTcyNzA2NDEgTDgyLjA2Nzk3MDIsMy42MzE2NjUyNSBDODIuMDcwMTY5MiwyLjg3NTMwNDAzIDgxLjc3MDIwNTksMi4xNDkyODg0OSA4MS4yMzQ1MzMyLDEuNjE0NDU4MDggQzgwLjY5ODg2MDYsMS4wNzk2Mjc2NyA3OS45NzE3MDE3LDAuNzgwMTM1OTcgNzkuMjE0MTQ5NCwwLjc4MjMzMTUxNyBMNTYuMjUxNjEzOCwwLjc4MjMzMTUxNyBDNTUuNDk0MDYxNCwwLjc4MDEzNTk3IDU0Ljc2NjkwMjYsMS4wNzk2Mjc2NyA1NC4yMzEyMjk5LDEuNjE0NDU4MDggQzUzLjY5NTU1NzIsMi4xNDkyODg0OSA1My4zOTU1OTM5LDIuODc1MzA0MDMgNTMuMzk3NzkyOSwzLjYzMTY2NTI1IEw1My4zOTc3OTI5LDguNTcyNzA2NDEgTDQwLjMyNDY1MzksOC41NzI3MDY0MSBDMzguNzQ4NTMyMiw4LjU3MjcwNjQxIDM3LjQ3MDgzMyw5Ljg0ODM5NjU4IDM3LjQ3MDgzMywxMS40MjIwNDAxIEwzNy40NzA4MzMsMjYuNzgwNDQzMSBMOTcuOTk0OTMwMSwyNi43ODA0NDMxIEw5Ny45OTQ5MzAxLDExLjQyMjA0MDEgQzk3Ljk5NDkzMzMsMTAuNjY0OTIwOSA5Ny42OTMxMzE4LDkuOTM4OTMwODkgOTcuMTU2MTUxMyw5LjQwNDMzOTgxIEM5Ni42MTkxNzA4LDguODY5NzQ4NzIgOTUuODkxMTY5Niw4LjU3MDUxODIgOTUuMTMyODYxMiw4LjU3MjcwNjQxIFoiIGlkPSLot6/lvoQiIGZpbGw9IiNFNUVBRjIiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjUuMjU3MTQyOSw0Mi43NDI4NTcxIEwzNi45MTQyODU3LDQyLjc0Mjg1NzEgTDM2LjkxNDI4NTcsNTQuNCBMMjUuMjU3MTQyOSw1NC40IEwyNS4yNTcxNDI5LDQyLjc0Mjg1NzEgWiBNMjUuMjU3MTQyOSw1OS45Mjk2NzAzIEwzNi45MTQyODU3LDU5LjkyOTY3MDMgTDM2LjkxNDI4NTcsNzEuNTg2ODEzMiBMMjUuMjU3MTQyOSw3MS41ODY4MTMyIEwyNS4yNTcxNDI5LDU5LjkyOTY3MDMgWiBNNDIuNDQzOTU2LDQyLjc0Mjg1NzEgTDU0LjEwMTA5ODksNDIuNzQyODU3MSBMNTQuMTAxMDk4OSw1NC40IEw0Mi40NDM5NTYsNTQuNCBMNDIuNDQzOTU2LDQyLjc0Mjg1NzEgWiBNNDIuNDQzOTU2LDU5LjkyOTY3MDMgTDU0LjEwMTA5ODksNTkuOTI5NjcwMyBMNTQuMTAxMDk4OSw3MS41ODY4MTMyIEw0Mi40NDM5NTYsNzEuNTg2ODEzMiBMNDIuNDQzOTU2LDU5LjkyOTY3MDMgWiIgaWQ9IuWQiOW5tuW9oueKti1jb3B5IiBmaWxsPSIjMTg4MkQ0IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
          />
        </dt>
        <dd>暂无记录</dd>
      </dl>
      <dl class="no-data" style="display:none">
        <dt>
          <img
            alt="no fav"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTYwcHgiIGhlaWdodD0iMTIwcHgiIHZpZXdCb3g9IjAgMCAxNjAgMTIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1My4xICg3MjYzMSkgLSBodHRwczovL3NrZXRjaGFwcC5jb20gLS0+CiAgICA8dGl0bGU+R3JvdXAgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMjguNTAyNDU3OCUiIHgyPSI1MCUiIHkyPSIzLjA2MTYxN2UtMTUlIiBpZD0ibGluZWFyR3JhZGllbnQtMSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0YxRjZGQSIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjEwNC4xODM5NzUlIiB4Mj0iNTAlIiB5Mj0iMy4wNjE2MTdlLTE1JSIgaWQ9ImxpbmVhckdyYWRpZW50LTIiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkZGRkZGIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFRkY1RjkiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i6KGM5oOFIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i6KGM5oOFLea3u+WKoOiHqumAiS1jb3B5LTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yOTUuMDAwMDAwLCAtNTY1LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjkwLjAwMDAwMCwgNTM2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlJlY3RhbmdsZS01IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHBvaW50cz0iMCAwIDE3MCAwIDE3MCAxNzAgMCAxNzAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QtNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wMDAwMDAsIDI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QiPgogICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiBwb2ludHM9IjUwLjQ5Nzg5NyA2LjY0NTc4NDQ0IDQzLjY3NjI0MDYgMC4zNTMzNTAzMTQgOC4wMzI3MzM1MyAwLjM1MzM1MDMxNCA4LjAzMjczMzUzIDYuNjQ1Nzg0NDQgOC4wMzI3MzM1MyA4NS42NzY0OTczIDguMDMyNzMzNTMgOTAuMjA3NTA3MiAxNTQuNDY2NjIxIDkwLjIwNzUwNzIgMTU0LjQ2NjYyMSA2LjY0NTc4NDQ0Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNDUuNTg2MzY3LDExNSBDMTQ2LjU0Mjc1MiwxMTEuMzQ0OTY5IDE0Ny4wNTIwMjMsMTA3LjUwODMzMiAxNDcuMDUyMDIzLDEwMy41NTI0MTkgQzE0Ny4wNTIwMjMsNzguNzEwNzQwNCAxMjYuOTY5NTM2LDU4LjU3MjU4MDYgMTAyLjE5NjUzMiw1OC41NzI1ODA2IEM3Ny40MjM1MjgsNTguNTcyNTgwNiA1Ny4zNDEwNDA1LDc4LjcxMDc0MDQgNTcuMzQxMDQwNSwxMDMuNTUyNDE5IEM1Ny4zNDEwNDA1LDEwNy41MDgzMzIgNTcuODUwMzExNywxMTEuMzQ0OTY5IDU4LjgwNjY5NjgsMTE1IEw5Ljk0NzU5ODNlLTE0LDExNSBMOS45NDc1OTgzZS0xNCwyMC45ODgxMDE4IEwxNTkuODYzMjQ4LDIwLjk4ODEwMTggTDE1OS44NjMyNDgsMTE1IEwxNDUuNTg2MzY3LDExNSBaIiBpZD0i5ZCI5bm25b2i54q2IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTIpIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSLliIbnu4QiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxLjQ2MjQyOCwgODAuMTIwOTY4KSIgZmlsbD0iIzE4ODJENCI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yMy41NzE1OTA2LDEuNzE3MDU1NCBMMjcuNjE1NjYxOSw5LjkwOTc5MTgzIEMyOC4wNjQ1MzEyLDEwLjgxODc1ODcgMjguOTMxODI1OSwxMS40NDk1MTM3IDI5LjkzNTA1NTgsMTEuNTk1MzQ0OSBMMzguOTc3NTc2NywxMi45MDg1MzMgQzQxLjUwNDQxMzMsMTMuMjc1OTQyNSA0Mi41MTMzMDcxLDE2LjM4MDE2MzUgNDAuNjg0NTU0MywxOC4xNjI3MDEzIEwzNC4xNDEyNTgxLDI0LjUzOTYyNzcgQzMzLjQxNTU2MjYsMjUuMjQ3NTQ1OSAzMy4wODQyMjA2LDI2LjI2Njk0OCAzMy4yNTU1NTU1LDI3LjI2NTgyMDQgTDM0LjgwMDQwMjEsMzYuMjcxMjQ2OSBDMzUuMjMxNTcxNSwzOC43ODcxODc5IDMyLjU5MDc0NzYsNDAuNzA2MzUzOSAzMC4zMzA4MjU0LDM5LjUxODQ2NzMgTDIyLjI0MjY4MjcsMzUuMjY2NzExIEMyMS4zNDQ5NDQxLDM0Ljc5NTIzNzYgMjAuMjczMDM4NywzNC43OTUyMzc2IDE5LjM3NjAwODEsMzUuMjY2NzExIEwxMS4yODc4NjU0LDM5LjUxODQ2NzMgQzkuMDI3OTQzMjEsNDAuNzA2MzUzOSA2LjM4NjQxMTMyLDM4Ljc4NzE4NzkgNi44MTgyODg2OCwzNi4yNzEyNDY5IEw4LjM2MzEzNTI3LDI3LjI2NTgyMDQgQzguNTM0NDcwMjIsMjYuMjY2OTQ4IDguMjAzMTI4MjQsMjUuMjQ3NTQ1OSA3LjQ3NjcyNDY3LDI0LjUzOTYyNzcgTDAuOTMzNDI4NTUzLDE4LjE2MjcwMTMgQy0wLjg5NDYxNjMwNSwxNi4zODAxNjM1IDAuMTE0Mjc3NTQ2LDEzLjI3NTk0MjUgMi42NDExMTQxNCwxMi45MDg1MzMgTDExLjY4MzYzNSwxMS41OTUzNDQ5IEMxMi42ODY4NjQ5LDExLjQ0OTUxMzcgMTMuNTU0MTU5NiwxMC44MTg3NTg3IDE0LjAwMzAyODksOS45MDk3OTE4MyBMMTguMDQ3MTAwMiwxLjcxNzA1NTQgQzE5LjE3NjM1MzQsLTAuNTcyMzUxODAyIDIyLjQ0MTYyOTUsLTAuNTcyMzUxODAyIDIzLjU3MTU5MDYsMS43MTcwNTU0IiBpZD0iRmlsbC0zIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="
          />
        </dt>
        <dd>暂无自选</dd>
      </dl>
    </section>
  </main>
</template>

<script>
export default {
  name: "market",
  props: {},
  data() {
    return {
      active: false
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
* {
  box-sizing: border-box;
}
main{
    margin-bottom: 1.2rem;
}
main .symbol-section {
  height: 1rem;
  display: flex;
  padding: 0.2rem 0.3rem;
  background: #fff;
}

main .symbol-section button {
  border: 0.01rem solid #c5cfd5;
  height: 0.6rem;
  width: 100%;
  font-size: 0.28rem;
  color: #8c9fad;
  border-right: none;
}

main .symbol-section button.active {
  border-radius: 0.03rem;
  background: #1882d4;
  color: #fff;
  border: 0.01rem solid #1882d4 !important;
}

main .symbol-section button.active + button {
  border-left: none;
}

main .symbol-section button:first-child {
  border-radius: 0.03rem 0 0 0.03rem;
}

main .symbol-section button:last-of-type {
  border-right: 1px solid #c5cfd5;
  border-radius: 0 0.03rem 0.03rem 0;
}
main .search-box {
  height: 0.82rem;
  display: flex;
  padding-left: 0.3rem;
  position: absolute;
  top: 0.88rem;
  left: 0;
  width: 100%;
  background: #f7f7fb;
  transform: translateY(-1rem);
  z-index: 1;
  opacity: 0;
  transition: transform 0.5s, opacity 0.5s;
}

main .search-box.active {
  opacity: 1;
  transform: translateY(0);
}

main .search-box input {
  height: 0.8rem;
  -ms-flex: 1;
  flex: 1;
  font-size: 0.28rem;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
  background: transparent;
}

main .search-box input::-webkit-input-placeholder {
  font-size: 0.28rem;
  color: #c5cfd5;
  font-weight: 400;
}

main .search-box input:-ms-input-placeholder,
main .search-box input::-ms-input-placeholder {
  font-size: 0.28rem;
  color: #c5cfd5;
  font-weight: 400;
}

main .search-box input::placeholder {
  font-size: 0.28rem;
  color: #c5cfd5;
  font-weight: 400;
}

main .search-box button {
  font-size: 0.28rem;
  color: #8c9fad;
  min-width: 1rem;
}
main .quote-tabs {
  font-size: 0.28rem;
  height: 0.7rem;
  line-height: 0.58rem;
  padding-top: 0.06rem;
  border-bottom: 0.01rem solid #e7ebee;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  background: #fff;
}

main .quote-tabs span {
  color: #8c9fad;
  margin-right: 0.7rem;
}

main .quote-tabs span.active {
  color: #1882d4;
  border-bottom: 0.05rem solid #1882d4;
}

main .quote-tabs span:last-of-type {
  margin-right: 0;
}
main .symbol-list {
  margin-top: 0.2rem;
  text-align: left;

}

main .symbol-list > div {
  padding: 0.16rem 0.3rem 0.14rem;
  height: 1.11rem;
  border-bottom: 1px solid #f7f7fb;
  display: flex;
  align-items: center;
}

main .symbol-list dt {
  font-size: 0.32rem;
  line-height: 0.48rem;
}

main .symbol-list dt span {
  line-height: 0.4rem;
  font-size: 0.2rem;
  color: #c5cfd5;
  margin-left: 0.06rem;
}

main .symbol-list dd {
  font-size: 0.24rem;
  line-height: 0.32rem;
  color: #8c9fad;
}

main .symbol-list .l {
  width: 2.7rem;
}

main .symbol-list .m {
  flex: 1;
}

main .symbol-list .r {
  width: 1.6rem;
  border-radius: 0.03rem;
  height: 0.66rem;
  color: #fff;
  background: #c5cfd5;
  line-height: 0.66rem;
  text-align: center;
}

main .symbol-list .r.up {
  background: #03ad8f;
}

main .symbol-list .r.down {
  background: #d14b64;
}

main .symbol-list .no-data {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2.4rem;
}

main .symbol-list .no-data dd {
  margin-top: 0.2rem;
  color: #c5cfd5;
}

.nav {
  box-sizing: content-box;
}
</style>
