<template>
<div>
    <header><img alt="Huobi Global" src="@/assets/home-logo2.svg"></header>
    <main class="page-trade margin">
        <div class="trade-symbol upper">
            <p><i class="mobile_icon_expand" action="expand"></i><span action="expand" data-base="btc" data-quote="usdt">btc / usdt</span> <span class="actions"><i class="mobile_icon_fav" action="fav"></i><i class="mobile_icon_chart" action="chart"></i></span></p>
        </div>
        <div class="margin-risk">
        <div class="info">
            <dl>
                <dt>---</dt>
                <dd>可用ONT</dd>
            </dl>
            <dl>
                <dt>---</dt>
                <dd>可用USDT</dd>
            </dl>
            <dl>
                <dt>0</dt>
                <dd>爆仓价</dd>
            </dl>
        </div>
        <div class="risk "> <span>风险率 0%</span>
            <div class="track">
                <div class="progress" style="width: 0%;"></div>
            </div>
        </div>
    </div>
    <div class="trade-panel" growing-ignore="true">
        <div class="trade-panel--title" id="trade-pannel-tabs"><button class="btn color-buy cur"
                data-direct="buy">买入</button> <button class="btn color-sell" data-direct="sell">卖出</button>
            <div class="select-box"><select id="trade-type" name="trade-type">
                    <option value="limit">限价</option>
                    <option value="market">市价</option>
                </select> <i class="arrow"></i></div>
        </div>
        <div class="trade-panel--content">
            <div class="fl trade-form buy" id="trade-form" growing-ignore="true">
                <div class="input-box input-price"><input autocomplate="new-password" id="price" min="0"
                        placeholder="价格" type="number"> <span class="actions" id="price-actions"><i
                            data-action="dec"></i> <i data-action="inc"></i></span></div>
                <div class="equivalent"><span>≈<em id="price-equivalent">¥59401.21</em></span></div>
                <div class="input-box input-amount"><input autocomplate="new-password" id="amount" min="0"
                        placeholder="数量" type="number"> <span class="upper" id="amount-coin"
                        data-amountcoin="btc">btc</span></div>
                <div class="avaliable">
                    <dl growing-ignore="true">
                        <dt class="fl">可用</dt>
                        <dd class="upper base-balance"><span id="base-balance" data-basebalance="--">--</span><em
                                data-base="btc">btc</em></dd>
                        <dd class="upper quote-balance"><span id="quote-balance" data-quotebalance="--">--</span><em
                                data-quote="usdt">usdt</em></dd>
                    </dl>
                </div>
                <div class="btn-group" id="position"><button data-proportion="0.25">1/4</button> <span></span> <button
                        data-proportion="0.5">1/2</button> <span></span> <button data-proportion="1">全仓</button></div>
                <div class="total" id="total"><span>交易额 <em class="upper" data-total="--">--</em> <em class="upper"
                            data-quote="usdt">usdt</em></span></div><button class="upper submit" data-base="btc"
                    data-directtext="买入(做多)" id="submit">买入(做多) btc</button>
            </div>
            <div class="fr handicap" id="handicap">
                <div class="handicap-title"><span class="index">盘口</span> <span class="price">价格</span> <span
                        class="amount">数量</span></div>
                <div class="handicap-sell" id="handicap-sell">
                    <dl style="background-size:15% 100%;" data-price="8361.00">
                        <dt class="fl">5</dt>
                        <dd class="fl">8361.00</dd>
                        <dd class="fr">0.350077</dd>
                    </dl>
                    <dl style="background-size:87% 100%;" data-price="8360.92">
                        <dt class="fl">4</dt>
                        <dd class="fl">8360.92</dd>
                        <dd class="fr">2.000000</dd>
                    </dl>
                    <dl style="background-size:100% 100%;" data-price="8360.91">
                        <dt class="fl">3</dt>
                        <dd class="fl">8360.91</dd>
                        <dd class="fr">2.310000</dd>
                    </dl>
                    <dl style="background-size:11% 100%;" data-price="8360.60">
                        <dt class="fl">2</dt>
                        <dd class="fl">8360.60</dd>
                        <dd class="fr">0.250000</dd>
                    </dl>
                    <dl style="background-size:30% 100%;" data-price="8360.48">
                        <dt class="fl">1</dt>
                        <dd class="fl">8360.48</dd>
                        <dd class="fr">0.699589</dd>
                    </dl>
                </div>
                <div class="handicap-price"><em id="nowprice" data-nowprice="8360.52">8360.52</em> <b
                        class="rate">---</b> <span>≈<b id="now-price-equivalent">¥59412.01</b></span></div>
                <div class="handicap-buy" id="handicap-buy">
                    <dl style="background-size:0% 100%;" data-price="8360.13">
                        <dt class="fl">1</dt>
                        <dd class="fl">8360.13</dd>
                        <dd class="fr">0.000231</dd>
                    </dl>
                    <dl style="background-size:2% 100%;" data-price="8360.11">
                        <dt class="fl">2</dt>
                        <dd class="fl">8360.11</dd>
                        <dd class="fr">0.050000</dd>
                    </dl>
                    <dl style="background-size:3% 100%;" data-price="8360.00">
                        <dt class="fl">3</dt>
                        <dd class="fl">8360.00</dd>
                        <dd class="fr">0.057922</dd>
                    </dl>
                    <dl style="background-size:0% 100%;" data-price="8359.99">
                        <dt class="fl">4</dt>
                        <dd class="fl">8359.99</dd>
                        <dd class="fr">0.001075</dd>
                    </dl>
                    <dl style="background-size:28% 100%;" data-price="8359.98">
                        <dt class="fl">5</dt>
                        <dd class="fl">8359.98</dd>
                        <dd class="fr">0.657574</dd>
                    </dl>
                </div>
                <div class="handicap-depth"><a href="/zh-cn/orderbook/">更多</a>
                    <div class="select-box"><select id="depth" name="depth">
                            <option value="0">深度 0</option>
                            <option value="1">深度 1</option>
                            <option value="2">深度 2</option>
                            <option value="3">深度 3</option>
                            <option value="4">深度 4</option>
                            <option value="5">深度 5</option>
                        </select> <i class="arrow"></i></div>
                </div>
            </div>
        </div>
    </div>
    <div class="trade-order">
        <div class="trade-order--title">当前委托 <span class="fr" id="to-history"><i
                    class="mobile_icon_history"></i>委托历史</span></div>
        <div class="trade-order--content" id="order-list" growing-ignore="true">
            <div class="no-info"> <img
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzI1cHgiIGhlaWdodD0iMTU3cHgiIHZpZXdCb3g9IjAgMCAzMjUgMTU3IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0OC4yICg0NzMyNykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+5aeU5omY5Y2V5Li656m6QDJ4PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHJlY3QgaWQ9InBhdGgtMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjM2NSIgaGVpZ2h0PSI2MyI+PC9yZWN0PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAuMDAwNTkwMSUiIHkxPSIyNy4xMzQ0MzExJSIgeDI9IjUwJSIgeTI9IjAlIiBpZD0ibGluZWFyR3JhZGllbnQtMyI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMCIgb2Zmc2V0PSIwJSI+PC9zdG9wPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRTVFQUVGIiBvZmZzZXQ9IjEwMCUiPjwvc3RvcD4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iMy4yNDA1OTMxMSUiIHkxPSIzLjI0MDU5MzExJSIgeDI9IjEwMCUiIHkyPSIxMDAlIiBpZD0ibGluZWFyR3JhZGllbnQtNCI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGMkY2RjkiIG9mZnNldD0iMCUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0U0RUFFRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgeDE9IjAlIiB5MT0iMTAwJSIgeDI9IjUwJSIgeTI9IjUwJSIgaWQ9ImxpbmVhckdyYWRpZW50LTUiPgogICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRDlERkU2IiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFNUVDRjIiIG9mZnNldD0iMTAwJSI+PC9zdG9wPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0i5Lqk5piT5L6n6L655qCPIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE1LjAwMDAwMCwgLTEyMzYuMDAwMDAwKSI+CiAgICAgICAgPGcgaWQ9Ikdyb3VwLTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAxMDk2LjAwMDAwMCkiPgogICAgICAgICAgICA8ZyBpZD0i5aeU5omY5Y2V5Li656m6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTUuMDAwMDAwLCAxNDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iT3ZhbC0xNS1Db3B5IiBvcGFjaXR5PSIwLjQ0OTk5OTk4OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDk2LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ik1hc2siIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4Mi41MDAwMDAsIDMxLjUwMDAwMCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMTgyLjUwMDAwMCwgLTMxLjUwMDAwMCkgIj48L2c+CiAgICAgICAgICAgICAgICAgICAgPGVsbGlwc2UgaWQ9Ik92YWwtMTUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtMykiIG1hc2s9InVybCgjbWFzay0yKSIgY3g9IjE4Mi41IiBjeT0iMTAzIiByeD0iMTgyLjUiIHJ5PSI5MiI+PC9lbGxpcHNlPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDIuMDAwMDAwLCAwLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iQ29tYmluZWQtU2hhcGUiIGZpbGw9InVybCgjbGluZWFyR3JhZGllbnQtNCkiIHBvaW50cz0iOTIgMjIuMzc5NzQ0NiA5MiAxMTIuMTk1MTIyIDAgMTEyLjE5NTEyMiAwIDAgNjkuNjMwOTIxNyAwIj48L3BvbHlsaW5lPgogICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUmVjdGFuZ2xlLTMwIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTUpIiBwb2ludHM9IjkyIDIyLjQzOTAyNDQgNjkuNTYwOTc1NiAyMi40MzkwMjQ0IDY5LjU2MDk3NTYgMCI+PC9wb2x5bGluZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxnIGlkPSJQYWdlLTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3MS4wMDAwMDAsIDMzLjAwMDAwMCkiIGZpbGw9IiNGRkZGRkYiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNS43MDg3OTg0LDAuNzM3MzM1NDQ2IEMxNS43MDg3OTg0LDAuNzQyMTkwMzI5IDE1LjcxMDA1ODcsMC43NDcwNDUyMTMgMTUuNzEwMDU4NywwLjc1MTkwMDA5NiBDMTUuNzM2NTIzNiwwLjk0NDg4MTcxOSAxNi4zMTYyMzA1LDUuMzg3MTAwMjEgMTQuNjE2MTc2OCwxMC41NjM2MTk4IEMxNC4xNzc2MTU5LDExLjg5NjI4NTQgMTMuNjA2NzMwNiwxMy4yODQ3ODIxIDEyLjgwMjcwMjIsMTQuNjQ3NzkwNyBDMTEuNzM0MDI1MSwxNi40NjQ3MzA4IDEwLjQ5MjY5NiwxOC4yNDUyNTk0IDkuMDAzMTAxMTcsMTkuODIzMDk2NiBDOC4yNDU3MDE0MiwyMC42MjUzNjYxIDcuMDk1MTA5MTIsMjEuNTMwODAxOSA2LjMzNjQ0OTE0LDIyLjE5MjI3OTggQzAuNjM4OTM3ODkxLDI3LjE1Mjc1NzEgMC4zMTUwNTgxMzIsMzIuNjU2OTgxMyAwLjMxNTA1ODEzMiwzNC45Nzg4Mjk0IEMwLjMxNTA1ODEzMiwzNy41NzQ5Nzg0IDEuMDY2MTU2NzIsNDMuMjgzMTA3OCA2LjU5MjI3NjM0LDQ3LjY4NTI3MzUgQzYuNzI0NjAwNzYsNDcuNzkwODY3MiA2LjkyNjIzNzk2LDQ3LjcyMDQ3MTQgNi45NjE1MjQ0Nyw0Ny41NTc4MzI4IEM3LjI2Nzc2MDk4LDQ2LjEzMTcxMDggOC42MzUxMTMyNyw0MC42NTQxODgzIDEyLjYyNTAwOTQsMzQuNjcyOTcxOCBDMTMuNzk5NTQ2MiwzMi45MTMwNzY1IDE1LjIzMjQzMDUsMzEuMTY1MzE4NCAxNi44NTgxMzA1LDI5LjUwNDk0ODIgQzE4LjQ4NTA5MDcsMjcuODQ0NTc4IDIwLjI3NTg4MTEsMjYuNDIzMzEwOCAyMS44MjU5NjcxLDI0LjU3OTY2ODggQzI1Ljc2MTY3MzMsMjAuMDYzNDEzMyAyNS4xMzc4NTgyLDE3LjA1MDk1OCAyNC4zODQyMzkxLDEzLjU4NDU3MTIgQzIzLjE5NTgzOTksOC4xMjY0NjgyNyAyMC4wNjkyMDMsNC41NzAyNjYwNCAxOS4zNTU5MTE0LDMuNTk2ODYxODggQzE5LjM1MDg3MDQsMy41OTA3OTMyOCAxOS4zNDU4Mjk1LDMuNTg1OTM4MzkgMTkuMzQwNzg4NiwzLjU3OTg2OTc5IEwxNy44Njg4MzcsMS45NzI5MDMzMiBDMTcuODY1MDU2MywxLjk2ODA0ODQ0IDE3Ljg2MTI3NTYsMS45NjQ0MDcyNyAxNy44NTc0OTQ5LDEuOTYwNzY2MTEgTDE2Ljg5MjE1NjgsMS4wNDY4MzQyNyBDMTYuODg5NjM2MywxLjA0MzE5MzExIDE2Ljg4NTg1NTYsMS4wNDA3NjU2NyAxNi44ODMzMzUyLDEuMDM4MzM4MjMgTDE2LjA3Njc4NjMsMC4zNTg2NTQ1MjUgQzE1LjkyMzAzOCwwLjIzMDAwMDExIDE1LjY4MzU5MzgsMC4zNDI4NzYxNTQgMTUuNjk2MTk2MSwwLjUzODI4NTIxOCBMMTUuNzA4Nzk4NCwwLjczNzMzNTQ0NiBaIiBpZD0iRmlsbC0xIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTExLjgxMjQxMTUsNTAuNTMwMTEzOSBDMTUuMzczODI4Niw1MS41NDQ3ODQ2IDE5LjA2Mzc4OTUsNTEuODkxOTA4OCAyMi42NTY3MTI0LDUwLjc2OTIxNjkgQzI2LjM5MzMwMTgsNDkuNjAxNjE3NCAzMC41NTIwNjkyLDQ3LjAzOTQ1MjYgMzIuOTM1MTY4OSw0Mi41OTIzNzkzIEMzNC4yMzQ0Njg2LDQwLjE2ODU3ODYgMzQuODU0NTAzLDM3LjUxMTc0MzYgMzQuODcyMTQ2MywzNC45ODk2MzE1IEMzNC44NzM0MDY1LDM0LjczMTEwOSAzNC44NzIxNDYzLDM0LjQ3MjU4NjQgMzQuODY1ODQ1MSwzNC4yMTQwNjM5IEMzNC44NjA4MDQyLDMzLjk2MTYwOTkgMzQuODUxOTgyNiwzMy43MTAzNjk3IDM0LjgzOTM4MDIsMzMuNDU3OTE1OCBDMzQuODI4MDM4MSwzMy4yMTI3NDQxIDM0LjgxMTY1NTEsMzIuOTY2MzU4OCAzNC43OTI3NTE2LDMyLjcyMTE4NzIgQzM0Ljc3NTEwODQsMzIuNDgyMDg0MiAzNC43NTI0MjQyLDMyLjI0NDE5NDkgMzQuNzI4NDc5OCwzMi4wMDUwOTE5IEMzNC43MDQ1MzU0LDMxLjc3MjA1NzQgMzQuNjc2ODEwMiwzMS41NDAyMzY4IDM0LjY0NjU2NDcsMzEuMzA5NjI5OCBDMzQuNjE3NTc5MywzMS4wODM4Nzc3IDM0LjU4NDgxMzMsMzAuODU4MTI1NiAzNC41NDk1MjY4LDMwLjYzMzU4NzIgQzM0LjUxNTUwMDUsMzAuNDE1MTE3NSAzNC40Nzc2OTM1LDMwLjE5NjY0NzcgMzQuNDM4NjI2MywyOS45NzkzOTE3IEMzNC4zOTk1NTkxLDI5Ljc2ODIwNDIgMzQuMzU5MjMxNiwyOS41NTcwMTY4IDM0LjMxMzg2MzMsMjkuMzQ1ODI5NCBDMzQuMjcyMjc1NiwyOS4xNDE5MjQzIDM0LjIyNjkwNzIsMjguOTM4MDE5MSAzNC4xODAyNzg2LDI4LjczNTMyNzggQzM0LjEzMzY1LDI4LjUzODcwNSAzNC4wODU3NjEyLDI4LjM0MjA4MjIgMzQuMDM1MzUxOSwyOC4xNDY2NzMxIEMzMy45ODYyMDI4LDI3Ljk1NzMzMjcgMzMuOTM1NzkzNSwyNy43Njc5OTIyIDMzLjg4MTYwMzUsMjcuNTc5ODY1NSBDMzMuODMxMTk0MiwyNy4zOTc4MDczIDMzLjc3NzAwNDIsMjcuMjE2OTYyOSAzMy43MjE1NTQsMjcuMDM3MzMyMiBDMzMuNjY4NjI0MiwyNi44NjI1NTY0IDMzLjYxMzE3NCwyNi42ODg5OTQzIDMzLjU1NTIwMzMsMjYuNTE2NjQ2IEMzMy41MDEwMTMzLDI2LjM1MTU3OTkgMzMuNDQ0MzAyOCwyNi4xODUzMDAxIDMzLjM4NTA3MTksMjYuMDIxNDQ3OCBDMzMuMzI5NjIxNywyNS44NjI0NTA0IDMzLjI3MTY1MSwyNS43MDQ2NjY3IDMzLjIxMjQyLDI1LjU0ODA5NjcgQzMzLjE1Njk2OTgsMjUuMzk4ODA5IDMzLjA5ODk5OTEsMjUuMjQ5NTIxMyAzMy4wMzg1MDgsMjUuMTAxNDQ3NCBDMzIuOTgxNzk3NSwyNC45NTk0NDIgMzIuOTIzODI2OCwyNC44MTg2NTA0IDMyLjg2NDU5NTksMjQuNjc3ODU4OCBDMzIuODA3ODg1NCwyNC41NDU1NjMyIDMyLjc0OTkxNDcsMjQuNDEyMDUzOSAzMi42OTA2ODM4LDI0LjI4MDk3MjEgQzMyLjYzNTIzMzUsMjQuMTU1OTU4OCAzMi41Nzk3ODMzLDI0LjAzMjE1OTMgMzIuNTIzMDcyOSwyMy45MDgzNTk3IEMzMi40Njg4ODI5LDIzLjc5MzA1NjMgMzIuNDEzNDMyNiwyMy42Nzc3NTI4IDMyLjM1NjcyMjIsMjMuNTYyNDQ5MyBDMzIuMzAzNzkyNCwyMy40NTU2NDE4IDMyLjI1MDg2MjYsMjMuMzQ4ODM0NCAzMi4xOTY2NzI2LDIzLjI0MzI0MDcgQzMyLjE0NjI2MzMsMjMuMTQ0OTI5MyAzMi4wOTU4NTQsMjMuMDQ2NjE3OSAzMi4wNDQxODQ1LDIyLjk0OTUyMDIgQzMxLjk5NzU1NTksMjIuODYwOTE4NiAzMS45NDk2NjcxLDIyLjc3MjMxNyAzMS44OTkyNTc3LDIyLjY4NDkyOTEgQzMxLjg1NTE0OTYsMjIuNjA0ODIzNSAzMS44MTEwNDE1LDIyLjUyNDcxNzkgMzEuNzY1NjczMSwyMi40NDU4MjYxIEMzMS43MjUzNDU3LDIyLjM3NTQzMDIgMzEuNjg1MDE4MiwyMi4zMDUwMzQ0IDMxLjY0MjE3MDMsMjIuMjM1ODUyMyBDMzEuNjA1NjIzNiwyMi4xNzM5NTI2IDMxLjU2OTA3NjgsMjIuMTEzMjY2NSAzMS41MzEyNjk5LDIyLjA1Mzc5NDIgQzMxLjQ5OTc2NCwyMi4wMDAzOTA1IDMxLjQ2OTUxODUsMjEuOTM2MDYzMyAzMS40MjAzNjk0LDIxLjg5NjAxMDUgQzMxLjM3NTAwMSwyMS44NTk1OTg5IDMxLjMxNDUwOTksMjEuODM1MzI0NCAzMS4yNTUyNzg5LDIxLjg0MTM5MzEgQzMxLjE1Njk4MDgsMjEuODUxMTAyOCAzMS4wNzg4NDY0LDIxLjkyMTQ5ODYgMzEuMDQ5ODYxLDIyLjAxMDEwMDMgQzMwLjgzNjg4MTcsMjIuNjU4MjI3MiAzMC4yMjY5MjkyLDI0LjA3NDYzOTUgMjkuOTU1OTc5MiwyNC42NjA4NjY3IEMyNy43NTY4NzM0LDI5LjQyNDcyMTIgMjQuMzcxODg4OSwzMi45MDgxMDAyIDIwLjU3MjI4NzgsMzYuNTY3NDY4NyBDMTguOTEzODIxOCwzOC4xNjQ3MjU0IDE3LjI1OTEzNjUsMzkuOTQ4ODk1MSAxNi4wODcxMjAyLDQxLjk2NDg4NTUgQzE1LjQ5NzMzMTQsNDIuOTc1OTE1MSAxNS4wMjQ3NDQyLDQ0LjA1MTI3MTggMTQuNzE0NzI3LDQ1LjE3MTUzNjIgQzE0LjQ1MDA3ODIsNDYuMTMwMzc1NyAxNC41NDcxMTYxLDQ3LjE2MDgyNDcgMTQuMjA2ODUzMyw0OC4xMDc1MjcgQzE0LjA5NDY5MjYsNDguNDIwNjY3IDEzLjk2NDg4ODcsNDguNzQ3MTU3OSAxMy43MjU0NDQ1LDQ4Ljk5MjMyOTUgQzEzLjI0NzgxNjQsNDkuNDgxNDU5MSAxMi42MjUyNjE1LDQ5LjY3NDQ0MDcgMTEuOTQ5Nzc2OSw0OS42NzQ0NDA3IiBpZD0iRmlsbC01Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="
                    alt="no-order">
                <p>暂无记录</p>
            </div>
        </div>
    </div>
    </main>
</div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {

    },
};
</script>

<style lang="less" scoped>
header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    height: 0.88rem;
    background-color: #1d2243;
    line-height: 0.88rem;
    display: flex;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

main {
    // margin-top: 1.08rem;
    text-align: left;
    font-size: 0.28rem !important;

    input {
        border: none;
        caret-color: #1882d4;
        color: #1f3f59;
    }
}
.page-trade.margin .margin-risk {
    padding-top: 20px;
    box-sizing: border-box;
    height: 176px;
    overflow: hidden;
    width: 750px
}

.page-trade.margin .margin-risk .info {
    margin: 0 30px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between
}

.page-trade.margin .margin-risk .info dl:last-of-type {
    text-align: right
}

.page-trade.margin .margin-risk .info dt {
    font-weight: 700
}

.page-trade.margin .margin-risk .info dd {
    font-size: 24px;
    margin-top: 10px;
    color: #c5cfd5
}

.page-trade.margin .margin-risk .risk {
    margin-top: 30px;
    width: 100%;
    color: #8c9fad
}

.page-trade.margin .margin-risk .risk.warn span {
    color: #d14b64
}

.page-trade.margin .margin-risk .risk.warn .progress {
    background-image: linear-gradient(90deg,rgba(209,75,100,.75),#d14b64)
}

.page-trade.margin .margin-risk .risk span {
    vertical-align: unset;
    margin-left: 30px
}

.page-trade.margin .margin-risk .risk .track {
    margin-top: 10px;
    height: 20px;
    width: 100%;
    background: #f7f7fb
}

.page-trade.margin .margin-risk .risk .progress {
    height: 100%;
    background-image: linear-gradient(-90deg,#dee2e6,#c7cfd5)
}

.page-trade.margin .avaliable {
    opacity: 0
}

.page-trade .trade-symbol {
    padding-left: 30px;
    height: 110px;
    font-size: 32px;
    font-weight: 700;
    line-height: 110px;
    position: relative
}

.page-trade .trade-symbol p {
    margin-right: 30px
}

.page-trade .trade-symbol .actions {
    float: right
}

.page-trade .trade-symbol .actions i {
    margin-left: 30px
}

.page-trade .trade-symbol i {
    font-size: 30px;
    vertical-align: unset
}

.page-trade .trade-symbol i.mobile_icon_fav {
    color: #c5cfd5;
    float: left
}

.page-trade .trade-symbol i.mobile_icon_fav.marked {
    color: inherit
}

.page-trade .trade-symbol span {
    vertical-align: unset
}

.page-trade .trade-panel .select-box {
    position: relative;
    float: right;
    margin-right: 30px;
    white-space: nowrap
}

.page-trade .trade-panel .select-box select {
    border: none;
    outline: none;
    background: transparent;
    -webkit-appearance: none;
    color: rgba(31,63,89,.5);
    font-size: 28px;
    line-height: 28px;
    padding-right: 30px;
    width: 100%;
    padding: 20px 30px 20px 0
}

.page-trade .trade-panel .select-box .arrow {
    left: -20px;
    top: -4px;
    position: relative
}

.page-trade .trade-panel .select-box .arrow:after,.page-trade .trade-panel .select-box .arrow:before {
    content: "";
    position: absolute
}

.page-trade .trade-panel .select-box .arrow:before {
    top: 0;
    left: 0;
    border-top: 10px solid #c5cfd5;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent
}

.page-trade .trade-panel .select-box .arrow:after {
    border-top: 0 solid transparent;
    border-left: 0 solid transparent;
    border-right: 0 solid transparent;
    top: 0;
    left: 10px
}

.page-trade .trade-panel--title {
    height: 86px;
    padding-left: 30px;
    width: 412px
}

.page-trade .trade-panel--title button {
    font-size: 40px;
    height: 54px;
    margin-top: 24px;
    line-height: 40px;
    margin-right: 60px;
    padding-bottom: 10px;
    border-bottom: 4px solid transparent;
    font-weight: 700;
    float: left
}

.page-trade .trade-panel--title button.cur {
    border-bottom-color: currentColor
}

.page-trade .trade-panel--title button:last-of-type {
    margin-right: 0
}

.page-trade .trade-panel--title .select-box {
    margin-top: 12px
}

.page-trade .trade-panel--content {
    padding-left: 30px;
    border-bottom: 20px solid #f7f7fb;
    &::after{
        display: block;
    visibility: hidden;
    height: 0;
    clear: both;
    content: ".";
    }
}

.page-trade .trade-panel--content .trade-form {
    width: 382px;
    padding-top: 18px
}

.page-trade .trade-panel--content .trade-form .input-box {
    position: relative
}

.page-trade .trade-panel--content .trade-form .input-box input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    border: 1px solid #c8cfd5;
    font-size: 32px;
    font-weight: 700;
    padding-left: 20px;
    padding-right: 20px
}

.page-trade .trade-panel--content .trade-form .input-box input.market {
    padding-right: 20px
}

.page-trade .trade-panel--content .trade-form .input-box input:disabled {
    background: #f7f7fb;
    color: #8c9fad;
    -webkit-text-fill-color: #8c9fad;
    font-weight: 400
}

.page-trade .trade-panel--content .trade-form .input-box input::-webkit-input-placeholder {
    color: #c5cfd5
}

.page-trade .trade-panel--content .trade-form .input-box input:-moz-placeholder {
    color: #c5cfd5
}

.page-trade .trade-panel--content .trade-form .input-box.input-price .actions {
    position: absolute;
    display: none;
    visibility: hidden;
    right: 0;
    top: 0;
    height: 100%;
    font-size: 0;
    border-left: 1px solid #e7ebee
}

.page-trade .trade-panel--content .trade-form .input-box.input-price .actions i {
    height: 30px;
    width: 80px;
    margin-top: 35px;
    display: inline-block
}

.page-trade .trade-panel--content .trade-form .input-box.input-price .actions i:last-of-type {
    border-left: 1px solid #e7ebee
}

.page-trade .trade-panel--content .trade-form .input-box.input-amount {
    position: relative
}

.page-trade .trade-panel--content .trade-form .input-box.input-amount span {
    position: absolute;
    right: 20px;
    top: 0;
    line-height: 100px;
    font-size: 28px;
    color: #8c9fad
}

.page-trade .trade-panel--content .trade-form .equivalent {
    color: #c5cfd5;
    font-size: 20px;
    padding-top: 10px;
    box-sizing: border-box;
    height: 60px
}

.page-trade .trade-panel--content .trade-form .equivalent em,.page-trade .trade-panel--content .trade-form .equivalent span {
    vertical-align: unset
}

.page-trade .trade-panel--content .trade-form .avaliable {
    height: 74px;
    font-size: 24px;
    padding-top: 10px;
    box-sizing: border-box;
    color: #8c9fad
}

.page-trade .trade-panel--content .trade-form .avaliable dl {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis
}

.page-trade .trade-panel--content .trade-form .avaliable dl dt {
    margin-right: 10px;
    float: left;
    height: 48px
}

.page-trade .trade-panel--content .trade-form .avaliable dl dd {
    white-space: nowrap;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: center;
    align-items: center
}

.page-trade .trade-panel--content .trade-form .avaliable dl span {
    margin-right: 10px;
    color: #1f3f59
}

.page-trade .trade-panel--content .trade-form .btn-group {
    border: 1px solid #c8cfd5;
    height: 60px;
    box-sizing: border-box
}

.page-trade .trade-panel--content .trade-form .btn-group span {
    float: left;
    width: 1px;
    height: 24px;
    margin-top: 18px;
    background: #e7ebee
}

.page-trade .trade-panel--content .trade-form .btn-group button {
    color: #8c9fad;
    width: 126px;
    height: 58px;
    line-height: 60px;
    font-size: 24px;
    float: left
}

.page-trade .trade-panel--content .trade-form .btn-group button:active {
    background: #e7ebee
}

.page-trade .trade-panel--content .trade-form .total {
    white-space: nowrap;
    overflow: hidden;
    height: 120px;
    padding-top: 62px;
    box-sizing: border-box;
    color: #8c9fad
}

.page-trade .trade-panel--content .trade-form .total.market,.page-trade .trade-panel--content .trade-form .total.market em {
    color: transparent
}

.page-trade .trade-panel--content .trade-form .total em {
    vertical-align: unset;
    font-weight: 700;
    color: #1f3f59
}

.page-trade .trade-panel--content .trade-form .submit {
    width: 382px;
    height: 88px;
    font-size: 28px;
    line-height: 88px;
    font-weight: 700;
    color: #fff
}

.page-trade .trade-panel--content .handicap {
    width: 298px;
    margin-top: -50px
}

.page-trade .trade-panel--content .handicap-title {
    height: 50px;
    font-size: 24px;
    color: #c5cfd5;
    margin-right: 30px;
    white-space: nowrap
}

.page-trade .trade-panel--content .handicap-title .index {
    margin-right: 30px
}

.page-trade .trade-panel--content .handicap-title .amount {
    float: right
}

.page-trade .trade-panel--content .handicap-buy,.page-trade .trade-panel--content .handicap-sell {
    height: 240px
}

.page-trade .trade-panel--content .handicap-buy dl,.page-trade .trade-panel--content .handicap-sell dl {
    height: 48px;
    line-height: 48px;
    font-size: 24px;
    overflow: hidden
}

.page-trade .trade-panel--content .handicap-buy dt,.page-trade .trade-panel--content .handicap-sell dt {
    width: 24px
}

.page-trade .trade-panel--content .handicap-buy dd,.page-trade .trade-panel--content .handicap-sell dd {
    letter-spacing: -1px
}

.page-trade .trade-panel--content .handicap-buy dd:last-of-type,.page-trade .trade-panel--content .handicap-sell dd:last-of-type {
    color: #8c9fad;
    margin-right: 30px
}

.page-trade .trade-panel--content .handicap-buy dl {
    background: linear-gradient(#f0faf9,#f0faf9) no-repeat;
    background-position: 100%
}

.page-trade .trade-panel--content .handicap-sell dl {
    background: linear-gradient(#fdf5f6,#fdf5f6) no-repeat;
    background-position: 100%
}

.page-trade .trade-panel--content .handicap-price {
    height: 86px;
    box-sizing: border-box;
    padding-top: 12px;
    font-size: 0
}

.page-trade .trade-panel--content .handicap-price em {
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    font-weight: 700;
    float: left;
    white-space: nowrap
}

.page-trade .trade-panel--content .handicap-price em+b {
    line-height: 30px;
    vertical-align: baseline;
    float: left
}

.page-trade .trade-panel--content .handicap-price b {
    font-size: 20px;
    margin-left: 10px;
    vertical-align: unset
}

.page-trade .trade-panel--content .handicap-price span {
    color: #c5cfd5;
    font-size: 20px;
    line-height: 20px;
    display: block;
    margin-top: 30px
}

.page-trade .trade-panel--content .handicap-depth {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
    white-space: nowrap;
    height: 84px
}

.page-trade .trade-panel--content .handicap-depth a {
    font-size: 24px;
    line-height: 64px;
    color: #8c9fad
}

.page-trade .trade-panel--content .handicap-depth select {
    font-size: 24px;
    line-height: 24px
}

.page-trade .trade-panel--content .handicap-depth .arrow {
    top: -2px
}

.page-trade .trade-order {
    padding-left: 0
}

.page-trade .trade-order--title {
    height: 120px;
    line-height: 120px;
    font-size: 40px;
    padding-left: 30px
}

.page-trade .trade-order--title span {
    opacity: .5;
    margin-right: 32px;
    font-size: 28px
}

.page-trade .trade-order--title span i {
    margin-right: 8px;
    vertical-align: unset
}

.page-trade .trade-order--content .loading {
    height: 480px;
    line-height: 480px;
    text-align: center
}

.page-trade .trade-order--content .loading img {
    height: 64px
}

.page-trade .trade-order--content .no-info {
    height: 480px;
    text-align: center;
    color: #c5cfd5;
    font-size: 24px;
    box-sizing: border-box;
    padding-top: 110px
}

.page-trade .trade-order--content .no-info img {
    display: block;
    margin: 0 auto 20px
}

.page-trade .trade-order--content dl {
    height: 214px;
    padding: 40px 30px;
    box-sizing: border-box;
    border-bottom: 1px solid #e7ebee
}

.page-trade .trade-order--content dl:last-of-type {
    border-bottom: none
}

.page-trade .trade-order--content dt {
    height: 62px
}

.page-trade .trade-order--content dt span {
    font-size: 24px;
    color: #8c9fad
}

.page-trade .trade-order--content dt em {
    vertical-align: unset;
    font-size: 32px;
    padding-right: 10px
}

.page-trade .trade-order--content dt button {
    font-size: 24px;
    color: #1882d4;
    float: right
}

.page-trade .trade-order--content dt button:disabled {
    color: #8c9fad
}

.page-trade .trade-order--content dd {
    float: left;
    width: 210px;
    overflow: hidden
}

.page-trade .trade-order--content dd em {
    display: block;
    height: 44px;
    color: #8c9fad;
    font-size: 24px;
    white-space: nowrap
}

.page-trade .trade-order--content dd:first-of-type {
    width: 270px
}

.page-trade .trade-order--content dd:last-of-type {
    text-align: right
}

.page-trade .drawer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 10;
    background: rgba(0,0,0,.4);
    transition: all .3s
}

.page-trade .drawer-box {
    width: 630px;
    height: 100%;
    background: #fff;
    overflow: auto;
    position: relative;
    transition: all .3s;
    left: -630px
}

.page-trade .drawer--title {
    height: 120px;
    line-height: 120px;
    font-size: 40px;
    padding-left: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 600px;
    font-weight: 700;
    background: #fff
}

.page-trade .drawer--title i {
    font-size: 30px;
    margin-right: 32px
}

.page-trade .drawer--tabs {
    height: 68px;
    line-height: 68px;
    border-bottom: 1px solid #c5cfd5;
    padding-left: 30px;
    position: absolute;
    top: 120px;
    left: 0;
    width: 600px;
    overflow-x: auto;
    white-space: nowrap;
    word-wrap: break-word;
    font-size: 0
}

.page-trade .drawer--tabs span {
    font-size: 28px;
    font-weight: 900;
    margin-right: 60px;
    min-width: 50px;
    color: #8c9fad
}

.page-trade .drawer--tabs span i {
    vertical-align: unset
}

.page-trade .drawer--tabs span.cur {
    color: inherit
}

.page-trade .drawer--content {
    padding: 188px 40px 0 30px
}

.page-trade .drawer--content .partition {
    height: 64px;
    padding-top: 30px;
    box-sizing: border-box;
    font-size: 28px;
    color: #1882d4;
    font-weight: 700
}

.page-trade .drawer--content .lists .no-info {
    height: 480px;
    text-align: center;
    color: #c5cfd5;
    font-size: 24px;
    box-sizing: border-box;
    padding-top: 110px
}

.page-trade .drawer--content .lists .no-info img {
    display: block;
    margin: 0 auto 20px
}

.page-trade .drawer--content .list:last-of-type dl:nth-last-of-type(1) {
    border-bottom: none
}

.page-trade .drawer--content dl {
    height: 100px;
    line-height: 100px;
    box-sizing: border-box;
    border-bottom: 1px solid #e7ebee
}

.page-trade .drawer--content dt {
    width: 160px;
    font-weight: 700
}

.page-trade .drawer--content dt.cur {
    color: #8c9fad
}

.page-trade .drawer--content dd {
    width: 200px;
    text-align: right
}

</style>
