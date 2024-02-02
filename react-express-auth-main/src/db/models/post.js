const knex = require('../knex');

class Post {

    constructor({ id, user_id, post_picture, post_material_id, project_description }) {
        this.id = id;
        this.userID = user_id;
        this.postPicture = post_picture;
        this.postMaterialID = post_material_id;
        this.projectDescription = project_description;
    }

    static async list () {
        const query = 'SELECT * FROM posts';
        const { rows } = await knex.raw(query);
        return rows.map((post) => new Post(post));
    }   

    static async find(user_id){
        const query = 'SELECT * FROM posts WHERE user_id = ?';
        const args = [user_id];
        const { rows } = await knex.raw(query);
        const post = rows[0];
        return post ? new Post(post) : null;
    }

    static async create(postPicture, postMaterialID, projectDescription){
        if (!postPicture || !postMaterialID || !projectDescription) {
            throw new Error('Missing required fields');
        }
        
        const query = 'INSERT INTO posts (post_picture, post_material_id, project_description) VALUES (?, ?, ?)';
        const args = [postPicture, postMaterialID, projectDescription];
        await knex.raw(query, args);
        return new Post(rows[0]);
    };

}

module.exports = User;