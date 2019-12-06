export default function healthBar(options) {
  let healthText;
  if (options.health > 50) {
    healthText = 'healthy';
  } else if ((options.health <= 50) && (options.health > 15)) {
    healthText = 'wounded';
  } else if (options.health <= 15) {
    healthText = 'critical';
  } else {
    throw new Error('Incorrect health value');
  }
  return healthText;
}
