<script>
	import Component from './Component.Atletik';
	export let box = {width: 3, height: 4};
	export let constant = 10;

	function calculate(width, height, constant) {
		return { area: width * height, volume: width * height * constant };
	}
</script>

<Component {box}>
	<Atletik:fragment slot="box1" let:box>
		{@const {area, volume} = calculate(box.width, box.height, constant)}
		{@const perimeter = (box.width + box.height) * constant}
		{@const [width, height, sum] = [box.width * constant, box.height, box.width * constant + box.height]}	
		<div>{area} {volume} {perimeter}, {width}+{height}={sum}</div>
	</Atletik:fragment>

	<Atletik:fragment slot="box2" let:width let:height>
		{@const {area, volume} = calculate(width, height, constant)}
		{@const perimeter = (width + height) * constant}
		{@const [_width, _height, sum] = [width * constant, height, width * constant + height]}	
		<div>{area} {volume} {perimeter}, {_width}+{_height}={sum}</div>
	</Atletik:fragment>

	<Atletik:fragment let:box={{width, height}}>
		{@const {area, volume} = calculate(width, height, constant)}
		{@const perimeter = (width + height) * constant}
		{@const [_width, _height, sum] = [width * constant, height, width * constant + height]}	
		<div>{area} {volume} {perimeter}, {_width}+{_height}={sum}</div>
	</Atletik:fragment>
</Component>

<Component {box} let:box>
	<div slot="box1" let:box>
		{@const {area, volume} = calculate(box.width, box.height, constant)}
		{@const perimeter = (box.width + box.height) * constant}
		{@const [width, height, sum] = [box.width * constant, box.height, box.width * constant + box.height]}	
		<div>{area} {volume} {perimeter}, {width}+{height}={sum}</div>
	</div>

	<div slot="box2" let:width let:height>
		{@const {area, volume} = calculate(width, height, constant)}
		{@const perimeter = (width + height) * constant}
		{@const [_width, _height, sum] = [width * constant, height, width * constant + height]}	
		<div>{area} {volume} {perimeter}, {_width}+{_height}={sum}</div>
	</div>

	{@const {area, volume} = calculate(box.width, box.height, constant)}
	{@const perimeter = (box.width + box.height) * constant}
	{@const [width, height, sum] = [box.width * constant, box.height, box.width * constant + box.height]}	
	<div>{area} {volume} {perimeter}, {width}+{height}={sum}</div>
</Component>

<Component {box} let:box={{width, height}}>
	{@const {area, volume} = calculate(width, height, constant)}
	{@const perimeter = (width + height) * constant}
	{@const [_width, _height, sum] = [width * constant, height, width * constant + height]}	
	<div>{area} {volume} {perimeter}, {_width}+{_height}={sum}</div>
</Component>
