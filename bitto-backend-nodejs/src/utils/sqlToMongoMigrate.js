require('dotenv').config({ path: require('path').resolve(__dirname, '../../.env') });
const mysql = require('mysql2/promise');
const mongoose = require('mongoose');
const Admin = require('../models/Admin');
const Author = require('../models/Author');
const Book = require('../models/Book');
const Category = require('../models/Category');
const Banner = require('../models/Banner');
const Cms = require('../models/Cms');
const Bodies = require('../models/Bodies');
const Chapter = require('../models/Chapter');
const Galleries = require('../models/Galleries');
const GalleriesImage = require('../models/GalleriesImage');
const Initiatives = require('../models/Initiatives');
const Mission = require('../models/Mission');
const Objective = require('../models/Objective');
const Organization = require('../models/Organization');
const Roadmap = require('../models/Roadmap');
const ActionPoints = require('../models/ActionPoints');
const Testimonial = require('../models/Testimonial');
// Add more as needed

async function migrate() {
  const mysqlConn = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
  });

  await mongoose.connect(process.env.MONGODB_URI);

  // ADMINS
  const [admins] = await mysqlConn.execute('SELECT * FROM admins');
  for (const a of admins) {
    await Admin.updateOne(
      { email: a.email },
      {
        name: a.name,
        email: a.email,
        password: a.password,
        status: a.status || 1,
        email_verified_at: a.email_verified_at,
        remember_token: a.remember_token,
        createdAt: a.created_at,
        updatedAt: a.updated_at,
        mysql_id: a.id,
      },
      { upsert: true }
    );
  }
  console.log('Admins migrated:', admins.length);

  // BANNERS
  const [banners] = await mysqlConn.execute('SELECT * FROM banners');
  for (const b of banners) {
    await Banner.updateOne(
      { mysql_id: b.id },
      {
        title: b.title,
        subtitle: b.subtitle,
        description: b.description,
        image: b.image,
        link: b.link,
        status: b.status,
        sort_order: b.sort_order,
        createdAt: b.created_at,
        updatedAt: b.updated_at,
        mysql_id: b.id,
      },
      { upsert: true }
    );
  }
  console.log('Banners migrated:', banners.length);

  // BLOGS
  // (Assuming you have a Blog model, otherwise skip)
  // const [blogs] = await mysqlConn.execute('SELECT * FROM blogs');
  // for (const b of blogs) {
  //   await Blog.updateOne(
  //     { _id: b.id },
  //     {
  //       ...
  //     },
  //     { upsert: true }
  //   );
  // }
  // console.log('Blogs migrated:', blogs.length);

  // BODIES
  const [bodies] = await mysqlConn.execute('SELECT * FROM bodies');
  for (const b of bodies) {
    await Bodies.updateOne(
      { mysql_id: b.id },
      {
        name: b.name,
        title: b.title,
        sub_title: b.sub_title,
        description: b.description,
        meta_title: b.meta_title,
        meta_keyword: b.meta_keyword,
        meta_description: b.meta_description,
        slug: b.slug,
        is_home: !!b.is_home,
        status: b.status,
        image: b.image,
        createdAt: b.created_at,
        updatedAt: b.updated_at,
        mysql_id: b.id,
      },
      { upsert: true }
    );
  }
  console.log('Bodies migrated:', bodies.length);

  // CHAPTER
  const [chapter] = await mysqlConn.execute('SELECT * FROM chapter');
  for (const c of chapter) {
    await Chapter.updateOne(
      { mysql_id: c.id },
      {
        name: c.name,
        title: c.title,
        sub_title: c.sub_title,
        description: c.description,
        meta_title: c.meta_title,
        meta_keyword: c.meta_keyword,
        meta_description: c.meta_description,
        slug: c.slug,
        is_home: !!c.is_home,
        status: c.status,
        image: c.image ? `http://localhost:3000/uploads/${c.image.replace('public/uploads/', '')}` : c.image,
        createdAt: c.created_at,
        updatedAt: c.updated_at,
        mysql_id: c.id,
      },
      { upsert: true }
    );
  }
  console.log('Chapter migrated:', chapter.length);

  // CMS
  const [cms] = await mysqlConn.execute('SELECT * FROM cms');
  for (const c of cms) {
    await Cms.updateOne(
      { mysql_id: c.id },
      {
        slug: c.slug,
        name: c.name,
        cms_title: c.cms_title,
        meta_title: c.meta_title,
        meta_keyword: c.meta_keyword,
        meta_description: c.meta_description,
        cms_contant: c.cms_contant,
        image: c.image ? `http://localhost:3000/uploads/${c.image.replace('public/uploads/', '').replace('https://admin.mockup4clients.com/', '')}` : c.image,
        is_home: c.is_home,
        status: c.status,
        cms_description: c.cms_description,
        cms_subtitle: c.cms_subtitle,
        image_desktop: c.image_desktop ? `http://localhost:3000/uploads/${c.image_desktop.replace('public/uploads/', '').replace('https://admin.mockup4clients.com/', '')}` : c.image_desktop,
        image_mobile: c.image_mobile ? `http://localhost:3000/uploads/${c.image_mobile.replace('public/uploads/', '').replace('https://admin.mockup4clients.com/', '')}` : c.image_mobile,
        cms_sub_title: c.cms_sub_title,
        cms_new_description: c.cms_new_description,
        cms_name_title: c.cms_name_title,
        deleted_at: c.deleted_at,
        createdAt: c.created_at,
        updatedAt: c.updated_at,
        mysql_id: c.id,
      },
      { upsert: true }
    );
  }
  console.log('CMS migrated:', cms.length);

  // GALLERIES
  const [galleries] = await mysqlConn.execute('SELECT * FROM galleries');
  for (const g of galleries) {
    await Galleries.updateOne(
      { mysql_id: g.id },
      {
        name: g.name,
        title: g.title,
        sub_title: g.sub_title,
        description: g.description,
        meta_title: g.meta_title,
        meta_keyword: g.meta_keyword,
        meta_description: g.meta_description,
        slug: g.slug,
        is_home: !!g.is_home,
        status: g.status,
        image: g.image,
        createdAt: g.created_at,
        updatedAt: g.updated_at,
        mysql_id: g.id,
      },
      { upsert: true }
    );
  }
  console.log('Galleries migrated:', galleries.length);

  // GALLERY_IMAGES
  const [gallery_images] = await mysqlConn.execute('SELECT * FROM gallery_images');
  for (const gi of gallery_images) {
    await GalleriesImage.updateOne(
      { mysql_id: gi.id },
      {
        mysql_gallery_id: gi.gallery_id, // store as number, not ObjectId
        image: gi.image,
        sort_order: gi.sort_order,
        createdAt: gi.created_at,
        updatedAt: gi.updated_at,
        mysql_id: gi.id,
      },
      { upsert: true }
    );
  }
  console.log('Gallery Images migrated:', gallery_images.length);

  // INITIATIVES
  const [initiatives] = await mysqlConn.execute('SELECT * FROM initiatives');
  for (const i of initiatives) {
    await Initiatives.updateOne(
      { mysql_id: i.id },
      {
        name: i.name,
        title: i.title,
        sub_title: i.sub_title,
        description: i.description,
        meta_title: i.meta_title,
        meta_keyword: i.meta_keyword,
        meta_description: i.meta_description,
        slug: i.slug,
        is_home: !!i.is_home,
        status: i.status,
        image: i.image,
        createdAt: i.created_at,
        updatedAt: i.updated_at,
        mysql_id: i.id,
      },
      { upsert: true }
    );
  }
  console.log('Initiatives migrated:', initiatives.length);

  // MISSION
  const [mission] = await mysqlConn.execute('SELECT * FROM mission');
  for (const m of mission) {
    await Mission.updateOne(
      { mysql_id: m.id },
      {
        name: m.name,
        title: m.title,
        sub_title: m.sub_title,
        description: m.description,
        meta_title: m.meta_title,
        meta_keyword: m.meta_keyword,
        meta_description: m.meta_description,
        slug: m.slug,
        is_home: !!m.is_home,
        status: m.status,
        image: m.image,
        createdAt: m.created_at,
        updatedAt: m.updated_at,
        mysql_id: m.id,
      },
      { upsert: true }
    );
  }
  console.log('Mission migrated:', mission.length);

  // OBJECTIVE
  const [objective] = await mysqlConn.execute('SELECT * FROM objective');
  for (const o of objective) {
    await Objective.updateOne(
      { mysql_id: o.id },
      {
        name: o.name,
        title: o.title,
        sub_title: o.sub_title,
        description: o.description,
        content: o.content,
        meta_title: o.meta_title,
        meta_keyword: o.meta_keyword,
        meta_description: o.meta_description,
        slug: o.slug,
        is_home: !!o.is_home,
        status: o.status,
        image: o.image,
        createdAt: o.created_at,
        updatedAt: o.updated_at,
        mysql_id: o.id,
      },
      { upsert: true }
    );
  }
  console.log('Objective migrated:', objective.length);

  // ORGANIZATION
  const [organization] = await mysqlConn.execute('SELECT * FROM organization');
  for (const o of organization) {
    await Organization.updateOne(
      { mysql_id: o.id },
      {
        name: o.name,
        title: o.title,
        sub_title: o.sub_title,
        description: o.description,
        meta_title: o.meta_title,
        meta_keyword: o.meta_keyword,
        meta_description: o.meta_description,
        slug: o.slug,
        is_home: !!o.is_home,
        status: o.status,
        image: o.image,
        createdAt: o.created_at,
        updatedAt: o.updated_at,
        mysql_id: o.id,
      },
      { upsert: true }
    );
  }
  console.log('Organization migrated:', organization.length);

  // ROADMAP
  const [roadmap] = await mysqlConn.execute('SELECT * FROM roadmap');
  for (const r of roadmap) {
    await Roadmap.updateOne(
      { mysql_id: r.id },
      {
        name: r.name,
        title: r.title,
        sub_title: r.sub_title,
        road_subtitle: r.road_subtitle,
        description: r.description,
        contant_dore: r.contant_dore,
        road_contant: r.road_contant,
        road_name_title: r.road_name_title,
        meta_title: r.meta_title,
        meta_keyword: r.meta_keyword,
        meta_description: r.meta_description,
        slug: r.slug,
        is_home: !!r.is_home,
        status: r.status,
        image: r.image,
        image_desktop: r.image_desktop,
        image_mobile: r.image_mobile,
        createdAt: r.created_at,
        updatedAt: r.updated_at,
        mysql_id: r.id,
      },
      { upsert: true }
    );
  }
  console.log('Roadmap migrated:', roadmap.length);

  // ACTIONPOINTS
  const [actionpoints] = await mysqlConn.execute('SELECT * FROM actionpoints');
  for (const a of actionpoints) {
    await ActionPoints.updateOne(
      { mysql_id: a.id },
      {
        name: a.name,
        title: a.title,
        sub_title: a.sub_title,
        description: a.description,
        meta_title: a.meta_title,
        meta_keyword: a.meta_keyword,
        meta_description: a.meta_description,
        slug: a.slug,
        is_home: !!a.is_home,
        status: a.status,
        image: a.image,
        createdAt: a.created_at,
        updatedAt: a.updated_at,
        mysql_id: a.id,
      },
      { upsert: true }
    );
  }
  console.log('ActionPoints migrated:', actionpoints.length);

  // TESTIMONIALS
  const [testimonials] = await mysqlConn.execute('SELECT * FROM testimonials WHERE status = 1 AND deleted_at IS NULL');
  for (const t of testimonials) {
    await Testimonial.updateOne(
      { mysql_id: t.id },
      {
        slug: t.slug,
        title: t.title,
        sort_description: t.sort_description,
        image: t.image ? `http://localhost:3000/uploads/${t.image.replace('public/uploads/', '').replace('https://admin.mockup4clients.com/', '')}` : t.image,
        post_by: t.post_by,
        description: t.description,
        sort_order: t.sort_order,
        status: t.status,
        long_description: t.long_description,
        deleted_at: t.deleted_at,
        createdAt: t.created_at,
        updatedAt: t.updated_at,
        mysql_id: t.id,
      },
      { upsert: true }
    );
  }
  console.log('Testimonials migrated:', testimonials.length);

  await mysqlConn.end();
  await mongoose.disconnect();
  console.log('Migration complete!');
}

migrate().catch(err => {
  console.error('Migration error:', err);
  process.exit(1);
}); 