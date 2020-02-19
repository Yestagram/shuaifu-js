'use strict';

import Shuaifu from "./shuaifu";

if (!global.Shuaifu) {
    global.Shuaifu = Shuaifu;
}

export default {
    Shuaifu: Shuaifu
}
