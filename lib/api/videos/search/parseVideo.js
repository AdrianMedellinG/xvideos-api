const base = require('../../base');

const parseVideo = ($, video) => {
  const $video = $(video);

  const title = $video.find('p:not(.metadata) a').attr('title');
  const path = $video.find('.thumb > a').attr('href');
  const url = `${base.BASE_URL}${path}`;
  const views = $video.find('p.metadata > span > span:not(.duration)').text();
  const duration = $video.find('p.metadata > span.bg > span.duration').text();
  const profileElement = $video.find('p.metadata > span > a');
  const thumbnail = $video.find('.thumb > a > img').attr('data-src');
  const profile = {
    name: profileElement.text(),
    url: `${base.BASE_URL}${profileElement.attr('href')}`,
  };

  return {
    url,
    path,
    title,
    duration,
    profile,
    views,
    thumbnail
  };
};

module.exports = parseVideo;
