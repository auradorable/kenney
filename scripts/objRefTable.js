const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Behaviors.bound,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Plugins.Keyboard,
		C3.Behaviors.destroy,
		C3.Behaviors.Physics,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Acts.SetPos,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Behaviors.Platform.Acts.SetIgnoreInput
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{BoundToLayout: 0},
	{Sprite: 0},
	{Solid: 0},
	{ground: 0},
	{platform: 0},
	{walls: 0},
	{Keyboard: 0},
	{carefulBuffy: 0},
	{DestroyOutsideLayout: 0},
	{Physics: 0},
	{diamond: 0},
	{door: 0},
	{TiledBackground: 0},
	{portal: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	ground: class extends self.ITiledBackgroundInstance {},
	platform: class extends self.ITiledBackgroundInstance {},
	walls: class extends self.ITiledBackgroundInstance {},
	Keyboard: class extends self.IInstance {},
	carefulBuffy: class extends self.ITiledBackgroundInstance {},
	diamond: class extends self.ISpriteInstance {},
	door: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	portal: class extends self.ISpriteInstance {}
}