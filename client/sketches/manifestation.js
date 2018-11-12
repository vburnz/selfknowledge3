export default function sketch (p) { 
    let width = 400; 
    let height = 400; 
    function Leaf(){
        this.pos = p.createVector(p.random(width), p.random(height-100));
        this.reached = false;
    
        this.show = function(){
            p.fill(255);
            p.noStroke();
            p.ellipse(this.pos.x, this.pos.y, 4, 4);
        }
    }

    function Branch(parent, pos, dir){
        this.parent = parent;
        this.pos = pos;
        this.dir = dir;
        this.origDir = this.dir.copy();
        this.count = 0;
        this.len = 5;
    
        this.reset = function(){
            this.dir = this.origDir.copy();
            this.count = 0;
        }
    
    
        this.next = function(){
            var nextDir = p5.Vector.mult(this.dir, this.len);
            var nextPos = p5.Vector.add(this.pos, nextDir);
            var nextBranch = new Branch(this, nextPos, this.dir.copy());
            return nextBranch;
        }
    
        this.show = function() {
            if (parent != null){
                p.stroke(255);
                p.line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
            }
        }
    
    }

    function Tree(){

        this.leaves = [];
        this.branches = [];
    
        for (var i = 0; i < 500; i++){
            this.leaves.push(new Leaf());
        }
    
        var pos = p.createVector(width / 2, height);
        var dir = p.createVector(0, -1);
        var root = new Branch(null, pos, dir);
        this.branches.push(root);
        var current = root;
        var found = false;
    
        while (!found) {
            for (var i = 0; i < this.leaves.length; i++) {
                var d = p5.Vector.dist(current.pos, this.leaves[i].pos);
                if (d < max_dist) {
                    found = true;
                }
            }
            if (!found) {
                var branch = current.next();
                current = branch;
                this.branches.push(current);
            }
        }
    
        var print = 0;
        this.show = function() {
            p.stroke(255);
            for (var i = 0; i < this.leaves.length; i++) {
                this.leaves[i].show();
            }
    
            for (var i = 0; i < this.branches.length; i++) {
                if (print < 3){
                    console.log(this.branches[i]);
                    print++;
                }
    
                this.branches[i].show();
            }
        }
    
        this.grow = function(){
            for (var i = 0; i < this.leaves.length; i++){
                var leaf = this.leaves[i];
    
                var closestBranch = null;
                var record = 100000;
                for (var j = 0; j < this.branches.length; j++){
                    var branch = this.branches[j];
                    var d = p5.Vector.dist(leaf.pos, branch.pos);
                    if (d < min_dist){
                        leaf.reached = true;
                        closestBranch = null;
                        break;
                    }
                    else if (d > max_dist){
    
                    }
                    else if (closestBranch == null || d < record){
                        closestBranch = branch;
                        record = d;
                    }
                }
    
                if (closestBranch != null){
                    var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
                    newDir.normalize();
                    closestBranch.dir.add(newDir);
                    closestBranch.count++;
    
                }
            }
    
            for (var i = this.leaves.length-1; i >=0; i--){
                if (this.leaves[i].reached){
                    this.leaves.splice(i, 1);
                }
            }
    
            for (var i = this.branches.length-1; i >= 0; i--){
                var branch = this.branches[i];
                if (branch.count > 0) {
                    branch.dir.div(branch.count + 1);
                    this.branches.push(branch.next());
                    //var newPos = p5.Vector.add(branch.pos, branch.dir);
                    //var newBranch = new Branch(branch, newPos, branch.dir.copy());
                    //this.branches.push(newBranch);
                }
                branch.reset();
            }
        }
    }

    var tree;
    var max_dist = 100;
    var min_dist = 10;
    
    p.setup = function(){
        p.createCanvas(400, 400);
        tree = new Tree();
    }
    
    p.draw = function(){
        p.background(51);
        tree.show();
        tree.grow();
    
    
    }
}