### How to compile & load

```sh
$ git clone git://github.com/oleavr/frida-agent-example.git
$ cd frida-agent-example/
$ npm install
$ frida -U -f com.example.android --no-pause -l _agent.js
```

### Development workflow

To continuously recompile on change, keep this running in a terminal:

```sh
$ npm run watch
```

And use an editor like Visual Studio Code for code completion and instant
type-checking feedback.

### Run Inspector
#### spawn
```shell
npm run spawn --pkgname=com.android.settings
```

#### attach
```shell
npm run attach --appname=设置
```

### Debug
[Frida ts环境搭建（PyCharm）](https://blog.xhyeax.com/2021/11/20/frida-script-debug-env-setup-pycharm/)

[Frida js调试环境搭建（VSCode + DevTools）](https://blog.xhyeax.com/2021/11/20/frida-script-debug-env-setup-vscode-devtools/)
