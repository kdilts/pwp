grid = function(x,y){
	this.sx = x;
	this.sy = y;

	this.tileWidth = 0;
	this.tileHeight = 0;

	this.content = [];

	this.init = function(){
		for(var i = 0; i < this.sx; i++){
			this.content[i] = [];
			for(var j = 0; j < this.sy; j++){
				this.content[i][j] = 0;
			}
		}
	};

	this.randomize = function(){
		for(var i = 0; i < this.sx; i++){
			for(var j = 0; j < this.sy; j++){
				if(Math.random() > .5){
					this.content[i][j] = 0;
				}else{
					this.content[i][j] = 1;
				}
			}
		}
	};

	/*this.disp = function(){
		var str;
		for(var i = 0; i < this.sx; i++){
			str = '';
			for(var j = 0; j < this.sy; j++){
				str += this.content[i][j];
				str += ' ';
			}
			console.log(str);
			console.log('');
		}
	};*/

	this.get = function(x,y){ return this.content[x][y]; };

	this.getAdj = function(x,y,wrap){
		var total = 0;

		// calculate neighbor coords
		var up = y-1;
		var dn = y+1;
		var lf = x-1;
		var rt = x+1;

		if(wrap){
			// perform wrap if needed
			if(up < 0){ up = this.sy-1; }
			if(dn > this.sy-1){ dn = 0; }
			if(lf < 0){ lf = this.sx-1; }
			if(rt > this.sx-1){ rt = 0; }

			// count neighbors
			if(this.get(x,up)==1){ total++; }
			if(this.get(x,dn)==1){ total++; }
			if(this.get(lf,y)==1){ total++; }
			if(this.get(rt,y)==1){ total++; }

			if(this.get(lf,up)==1){ total++; }
			if(this.get(lf,dn)==1){ total++; }
			if(this.get(rt,up)==1){ total++; }
			if(this.get(rt,dn)==1){ total++; }
		}else{
			// count neighbors
			if(up !== -1 && this.get(x,up)==1){ total++; }
			if(dn < this.sy && this.get(x,dn)==1){ total++; }
			if(lf !== -1 && this.get(lf,y)==1){ total++; }
			if(rt < this.sx && this.get(rt,y)==1){ total++; }

			if(up !== -1 && lf !== -1 && this.get(lf,up)==1){ total++; }
			if(dn < this.sy && lf !== -1 && this.get(lf,dn)==1){ total++; }
			if(up !== -1 && rt < this.sx && this.get(rt,up)==1){ total++; }
			if(dn < this.sy && rt < this.sx && this.get(rt,dn)==1){ total++; }			
		}

		return total;
	};

	this.set = function(x,y,s){ this.content[x][y] = s; };

	this.toggle = function(x,y){
		if(this.content[x][y] == 0){
			this.content[x][y] = 1;
		}else{
			this.content[x][y] = 0;
		}
	};

	this.draw = function(gfx,width,height){
		// clear
		gfx.fillStyle = 'rgb(100,100,100)';
		gfx.fillRect(0,0,width,height);

		// calculate size
		this.tileWidth = width/this.sx;
		this.tileHeight = height/this.sy;

		// tiles
		gfx.fillStyle = gfx.strokeStyle = 'green';
		for(var i in this.content){
			for(var j in this.content[i]){
				if(this.content[i][j] == 1){
					gfx.fillRect(
						i*this.tileWidth,j*this.tileHeight,
						this.tileWidth,this.tileHeight
					);
				}
			}
		}

		// grid lines
		gfx.fillStyle = gfx.strokeStyle = 'black';
		gfx.lineWidth = 1;

		// vertical
		for(i = 1; i < this.sx; i++){
			gfx.beginPath();
			gfx.moveTo(i*this.tileWidth,0);
			gfx.lineTo(i*this.tileWidth,height);
			gfx.stroke();
		}

		// horizontal
		for(i = 1; i < this.sy; i++){
			gfx.beginPath();
			gfx.moveTo(0,i*this.tileHeight);
			gfx.lineTo(width,i*this.tileHeight);
			gfx.stroke();
		}

	}

};