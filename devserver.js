const {spawnSync} = require('child_process');
spawnSync('ibazel', ['run', '//src:devserver'], {stdio: 'inherit'});
