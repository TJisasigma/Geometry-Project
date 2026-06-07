const units = [
  {
    number: 1,
    title: 'Line Segments and Angles',
    concepts: [
      concept('Complementary Angles', 'Angles whose measures add to 90°. Use the slider to split a right angle.', ['m∠A + m∠B = 90°', 'Each angle is the complement of the other.', 'Complementary angles do not have to be adjacent.'], 'Set one angle to 37°. What is its complement?', 'angleSum', { sum: 90 }),
      concept('Supplementary Angles', 'Angles whose measures add to 180°. Drag the linear-pair slider to see the missing angle.', ['m∠A + m∠B = 180°', 'Linear pairs are always supplementary.', 'Supplementary angles do not have to be adjacent.'], 'Make one angle obtuse. What happens to the other?', 'angleSum', { sum: 180 }),
      concept('Vertical Angles', 'Opposite angles formed by intersecting lines. They are always congruent.', ['Vertical angles are congruent.', 'Adjacent angles at the intersection are supplementary.', 'The theorem works for any two intersecting lines.'], 'Rotate the line and name both vertical-angle pairs.', 'intersectingLines'),
      concept('Right Angles', 'A right angle measures exactly 90° and is usually marked with a square corner.', ['Right angle = 90°', 'Perpendicular lines form four right angles.', 'Two acute angles in a right triangle are complementary.'], 'Move the ray until the readout is exactly 90°.', 'angleSum', { sum: 90, single: true }),
      concept('Linear Pairs', 'Adjacent angles whose noncommon sides form a straight line.', ['Linear pairs are supplementary.', 'They share a vertex and one side.', 'Their outer rays point in opposite directions.'], 'Use the slider to prove both angle measures add to 180°.', 'angleSum', { sum: 180 }),
      concept('Adjacent Angles', 'Angles that share a vertex and a common side without overlapping interiors.', ['Adjacent angles touch side-by-side.', 'Angle Addition Postulate: whole angle equals the sum of adjacent parts.', 'Adjacent angles are not automatically congruent or supplementary.'], 'Adjust the two adjacent angles and compare the parts to the whole.', 'angleSum', { sum: 140 })
    ]
  },
  {
    number: 2,
    title: 'Slope, Midpoint, and Distance Formulas',
    concepts: [
      concept('Slope Formula', 'The steepness of a line between two points.', ['m = (y₂ - y₁) / (x₂ - x₁)', 'Positive slopes rise left to right; negative slopes fall.', 'Horizontal slope is 0; vertical slope is undefined.'], 'Move the points and create a slope of -2.', 'coordinate'),
      concept('Midpoint Formula', 'The average of the x-values and y-values of endpoints.', ['M = ((x₁ + x₂)/2, (y₁ + y₂)/2)', 'The midpoint splits a segment into two congruent pieces.', 'Use averaging even if coordinates are negative.'], 'Find a segment whose midpoint is the origin.', 'coordinate'),
      concept('Distance Formula', 'The length between two coordinate points using a right-triangle idea.', ['d = √((x₂ - x₁)² + (y₂ - y₁)²)', 'Horizontal change and vertical change are the legs.', 'Distance is always nonnegative.'], 'Move the points to make a 3-4-5 triangle.', 'coordinate')
    ]
  },
  {
    number: 3,
    title: 'Transformations (Rotations, Reflections, Translations)',
    concepts: [
      concept('Rotations', 'Turn a figure around a center by a given angle.', ['Preserves size, shape, side lengths, and angle measures.', 'Common origin rules: 90° CCW (x,y)→(-y,x); 180° (x,y)→(-x,-y).', 'Orientation changes by turning, not flipping.'], 'Rotate the triangle 90°, 180°, and 270°.', 'transform', { mode: 'rotate' }),
      concept('Reflections', 'Flip a figure across a line of reflection.', ['Across x-axis: (x,y)→(x,-y).', 'Across y-axis: (x,y)→(-x,y).', 'Corresponding points are the same distance from the mirror line.'], 'Reflect across both axes and compare orientation.', 'transform', { mode: 'reflect' }),
      concept('Translations', 'Slide every point the same distance in the same direction.', ['Translation rule: (x,y)→(x+a,y+b).', 'Preserves congruence and orientation.', 'All connecting segments between preimage and image are parallel and congruent.'], 'Translate by ⟨4,-2⟩ and describe each point movement.', 'transform', { mode: 'translate' })
    ]
  },
  {
    number: 4,
    title: 'Proofs',
    concepts: [
      concept('Early Postulates: Addition / Subtraction / Partition / Transitive / Substitution', 'Proof tools that justify algebraic and geometric equation moves.', ['Addition: add equal quantities to both sides.', 'Subtraction: subtract equal quantities from both sides.', 'Partition: a whole can be split into parts.', 'Transitive: if a=b and b=c, then a=c.', 'Substitution: replace a quantity with an equal quantity.'], 'Pick the reason that justifies each proof step in your notebook.', 'proof'),
      concept('Line Segment and Angle Addition/Subtraction', 'Whole segments or angles equal the sum of their non-overlapping parts.', ['Segment Addition: AB + BC = AC when B is between A and C.', 'Angle Addition: m∠AOB + m∠BOC = m∠AOC.', 'Subtraction helps isolate a missing part.'], 'Enter one missing segment or angle value after splitting the whole.', 'partition'),
      concept('Angle Relationship Theorems: Vertical angles, Supplements of Congruent Angles', 'Theorems let you prove angle congruence from angle relationships.', ['Vertical angles are congruent.', 'Supplements of congruent angles are congruent.', 'Complements of congruent angles are congruent.'], 'Use the intersection diagram to write a two-column proof.', 'intersectingLines')
    ]
  },
  {
    number: 5,
    title: 'Parallel and Perpendicular Lines',
    concepts: [
      concept('Angle Pairs formed by a Transversal: alternate interior / alternate exterior / corresponding / same side interior angles', 'When a transversal cuts parallel lines, special angle pairs become congruent or supplementary.', ['Corresponding angles are congruent.', 'Alternate interior angles are congruent.', 'Alternate exterior angles are congruent.', 'Same-side interior angles are supplementary.', 'Perpendicular lines meet at 90°.'], 'Switch angle-pair types and predict congruent vs supplementary.', 'transversal')
    ]
  },
  {
    number: 6,
    title: 'Triangles - Classification and Properties',
    concepts: [
      concept('Triangle Theorems: Sum of Interior angles / Exterior Angle Theorem / Isosceles Triangle Theorem', 'Core triangle angle facts used in calculations and proofs.', ['Interior angles of a triangle sum to 180°.', 'Exterior angle = sum of the two remote interior angles.', 'Isosceles triangles have congruent base angles.'], 'Change two interior angles and calculate the third plus an exterior angle.', 'triangleAngles'),
      concept('Classification by congruent sides and angle measures', 'Classify triangles by sides and by angles.', ['Sides: scalene, isosceles, equilateral.', 'Angles: acute, right, obtuse.', 'Equilateral triangles are also equiangular with three 60° angles.'], 'Create one isosceles obtuse triangle and one scalene right triangle.', 'triangleClass')
    ]
  },
  {
    number: 7,
    title: 'Proving Triangles Congruent',
    concepts: [
      concept('SSS, SAS, ASA, AAS/SAA, and Hy-Leg', 'Triangle congruence shortcuts prove two triangles are identical in size and shape.', ['SSS: three side pairs.', 'SAS: two side pairs with included angle.', 'ASA: two angle pairs with included side.', 'AAS/SAA: two angle pairs with a non-included side.', 'Hy-Leg: right triangles with congruent hypotenuse and one leg.'], 'Select given markings and decide which shortcut applies.', 'congruence')
    ]
  },
  {
    number: 8,
    title: 'CPCTC',
    concepts: [
      concept('CPCTC', 'Corresponding Parts of Congruent Triangles are Congruent. Use it after proving triangles congruent.', ['First prove triangles congruent.', 'Then match corresponding vertices in the congruence statement.', 'Only then conclude matching sides or angles are congruent.'], 'Write a congruence statement and identify which side follows by CPCTC.', 'proof')
    ]
  },
  {
    number: 9,
    title: 'Proportions and Similarity',
    concepts: [
      concept('Writing and Solving Proportions', 'A proportion states that two ratios are equal.', ['a/b = c/d', 'Cross products: ad = bc.', 'Units and matching order matter.'], 'Solve x/12 = 5/8 with the cross-product slider.', 'proportion'),
      concept('Similar Polygons: Are these two polygons similar?', 'Similar polygons have congruent corresponding angles and proportional corresponding sides.', ['Same shape, possibly different size.', 'Check all corresponding angles and side ratios.', 'Order vertices consistently.'], 'Scale the polygon and decide when it stays similar.', 'similarity'),
      concept('Similar Polygons: Find the ratio of similitude/scale factor', 'The scale factor compares corresponding side lengths.', ['Scale factor = image side / original side.', 'Perimeter ratio equals scale factor.', 'Area ratio equals scale factor squared.'], 'Change the scale factor and watch perimeter and area ratios update.', 'similarity'),
      concept('Similar Polygons: Find missing angle of similar polygons', 'Corresponding angles of similar polygons are congruent.', ['If polygons are similar, corresponding angles are equal.', 'Use the vertex order to match angles.', 'Side scale does not change angle measure.'], 'Choose matching vertices and find a missing angle.', 'similarity'),
      concept('Similar Polygons: Find missing side lengths / find perimeter using Ratio of Similitude', 'Use proportional corresponding sides to solve missing lengths and perimeters.', ['x/corresponding side = scale factor.', 'New perimeter = old perimeter × scale factor.', 'Set ratios in the same order.'], 'Double a polygon and compare side lengths and perimeters.', 'similarity'),
      concept('Proving Triangles Similar: Methods of Similarity - AA, SSS of Similarity, SAS of Similarity', 'Similarity shortcuts prove triangles have the same shape.', ['AA: two angle pairs congruent.', 'SSS Similarity: all three side ratios equal.', 'SAS Similarity: two side ratios equal and included angle congruent.'], 'Choose givens and identify AA, SSS Similarity, or SAS Similarity.', 'similarTriangles'),
      concept('Proving Triangles Similar: Are these two triangles similar?', 'Decide whether triangles are similar by checking angle pairs or proportional sides.', ['Look for parallel-line angle relationships.', 'Reduce side ratios before comparing.', 'Similarity statements must match corresponding vertices.'], 'Adjust side lengths until all ratios match.', 'similarTriangles'),
      concept('Proving Triangles Similar: Write formal written proof proving two triangles similar using Angle Angle (AA)', 'A formal AA proof requires two justified angle congruences.', ['State the two angle congruences.', 'Give reasons such as vertical angles or parallel-line angles.', 'Conclude triangles are similar by AA.'], 'Use the proof builder to outline an AA proof.', 'proof'),
      concept('Proving Triangles Similar: CSSTP Formal Proofs', 'Corresponding Sides of Similar Triangles are Proportional after proving similarity.', ['First prove triangles similar.', 'Then write a valid proportion from corresponding sides.', 'CSSTP is the similarity version of CPCTC for sides.'], 'Write a CSSTP proportion from the highlighted triangles.', 'proof'),
      concept('Parallel Lines and Proportional Parts aka Side Splitter Theorem', 'A line parallel to one side of a triangle divides the other two sides proportionally.', ['If DE ∥ BC, then AD/DB = AE/EC.', 'The smaller triangle is similar to the larger triangle.', 'Set proportions with corresponding split parts.'], 'Move the splitter and compare the ratios on both sides.', 'sideSplitter')
    ]
  },
  {
    number: 10,
    title: 'Right Triangles',
    concepts: [
      concept('Geometric Mean and Proportions in Right Triangle', 'The altitude to the hypotenuse creates three similar right triangles.', ['Altitude² = product of hypotenuse segments.', 'Leg² = hypotenuse × adjacent hypotenuse segment.', 'Geometric mean x satisfies a/x = x/b.'], 'Change hypotenuse segments and calculate the altitude.', 'rightTriangle'),
      concept('Pythagorean Theorem: Pythagorean Triples', 'Some integer side lengths always form right triangles.', ['a² + b² = c².', 'Common triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25.', 'Multiples of triples are triples.'], 'Scale a 3-4-5 triangle and verify the equation.', 'pythagorean'),
      concept('Pythagorean Theorem: Find missing side of right triangle given 2 other sides', 'Use the Pythagorean Theorem to solve for a missing leg or hypotenuse.', ['Hypotenuse is the longest side opposite the right angle.', 'Missing hypotenuse: c = √(a²+b²).', 'Missing leg: a = √(c²-b²).'], 'Find the missing side when legs are 9 and 12.', 'pythagorean'),
      concept('Special Right Triangles: 30-60 Right Triangle special side ratios', 'A 30-60-90 triangle has fixed side ratios.', ['short leg : long leg : hypotenuse = 1 : √3 : 2.', 'Short leg is opposite 30°.', 'Long leg is opposite 60°.'], 'Given short leg 7, find the other sides.', 'specialRight', { kind: '30-60-90' }),
      concept('Special Right Triangles: 45-45 Right Triangle special side ratio', 'A 45-45-90 triangle is isosceles right.', ['leg : leg : hypotenuse = 1 : 1 : √2.', 'Both acute angles are 45°.', 'Hypotenuse = leg√2.'], 'Given hypotenuse 10√2, find each leg.', 'specialRight', { kind: '45-45-90' }),
      concept('Given one side of a 30-60 or 45-45, find the other two sides by using the special ratios', 'Special ratios are faster than general trig when the triangle angles are known.', ['Identify the triangle type first.', 'Match the given side to the ratio position.', 'Scale every part of the ratio by the same value.'], 'Toggle triangle type and side given.', 'specialRight'),
      concept('Alternatively: Finding missing side of a right triangle using Basic Trig Ratios problem', 'If you know an acute angle and one side, SOHCAHTOA can find another side.', ['sin θ = opposite/hypotenuse.', 'cos θ = adjacent/hypotenuse.', 'tan θ = opposite/adjacent.'], 'Use 38° and adjacent side 11 to find the opposite side.', 'trig')
    ]
  },
  {
    number: 11,
    title: 'Trigonometry',
    concepts: [
      concept('Basic Trigonometric Ratios - SOHCAHTOA: Given the THREE side lengths of a right triangle, write SINE, COSINE, and TANGENT ratios', 'Trigonometric ratios compare sides relative to a chosen acute angle.', ['SOH: sin θ = opposite/hypotenuse.', 'CAH: cos θ = adjacent/hypotenuse.', 'TOA: tan θ = opposite/adjacent.'], 'Label opposite, adjacent, and hypotenuse for either acute angle.', 'trig'),
      concept('Solving for Sides of a Right Triangle using Trigonometric Ratios: Given one side and one acute angle, write a proportion to find a missing side', 'Choose sin, cos, or tan based on the known and unknown sides.', ['Write the ratio first.', 'Substitute known values.', 'Solve by multiplying or dividing.'], 'Change angle and known side; watch the missing side update.', 'trig'),
      concept('Angle of elevation and depression applications of the Pythagorean Theorem', 'Elevation looks up; depression looks down from a horizontal line.', ['Both are measured from a horizontal line.', 'Alternate interior angles often make elevation and depression equal.', 'Use right-triangle trig or Pythagorean Theorem depending on given values.'], 'Model a ladder, tower, or airplane line of sight.', 'elevation'),
      concept('Solving for Angles of a Right Triangle using Trigonometric Ratios: Given two sides, write a proportion to find a missing angle using inverse function', 'Inverse trig finds the angle when you know a side ratio.', ['θ = sin⁻¹(opposite/hypotenuse).', 'θ = cos⁻¹(adjacent/hypotenuse).', 'θ = tan⁻¹(opposite/adjacent).'], 'Use opposite 7 and adjacent 12 to find θ.', 'inverseTrig'),
      concept('Law of Sines and Law of Cosines: For non-right triangles, find missing sides', 'These laws solve oblique triangles when Pythagorean Theorem does not apply.', ['Law of Sines: a/sin A = b/sin B = c/sin C.', 'Law of Cosines: c² = a² + b² - 2ab cos C.', 'Use Law of Cosines for SAS or SSS; Law of Sines for ASA, AAS, or SSA with care.'], 'Pick a case and compute a missing side.', 'oblique'),
      concept('Law of Sines and Law of Cosines: For non-right triangles, find missing angles using inverse function', 'Use inverse sine or inverse cosine after setting up the correct law.', ['Law of Cosines angle form: cos C = (a²+b²-c²)/(2ab).', 'Inverse functions return angle measures.', 'Check ambiguous SSA cases when using Law of Sines.'], 'Find the largest angle from three side lengths.', 'oblique')
    ]
  },
  {
    number: 12,
    title: 'Quadrilaterals',
    concepts: [
      concept('Angles of a Polygons: Find the SUM of the INTERIOR angles of any “n” sided polygon', 'Triangulate a polygon from one vertex to count interior angle sum.', ['Interior sum = (n - 2) × 180°.', 'A quadrilateral sums to 360°.', 'A triangle sums to 180°.'], 'Slide n from 3 to 12 and watch the triangles appear.', 'polygon'),
      concept('Angles of a Polygons: Find the measure of ONE INTERIOR angle of any “n” sided REGULAR polygon', 'A regular polygon has equal sides and equal angles.', ['One interior angle = ((n - 2) × 180°)/n.', 'Regular means all angles congruent.', 'Interior + exterior at a vertex = 180°.'], 'Find one interior angle of a regular decagon.', 'polygon'),
      concept('Angles of a Polygons: Find the SUM of the EXTERIOR angles of any “n” sided polygon', 'One exterior angle at each vertex always sums to a full turn.', ['Exterior angle sum = 360°.', 'This works for any convex polygon.', 'Use one exterior angle per vertex.'], 'Explain why changing n does not change the exterior sum.', 'polygon'),
      concept('Angles of a Polygons: Find the measure of ONE EXTERIOR angle of any “n” sided REGULAR polygon', 'Regular exterior angles divide 360° equally.', ['One exterior angle = 360°/n.', 'One exterior + one interior = 180°.', 'Exterior angle is useful for turning problems.'], 'Find one exterior angle of a regular 18-gon.', 'polygon'),
      concept('Properties of Parallelograms: identify and apply the SIX parallelogram properties', 'Parallelograms have parallel opposite sides and many matching parts.', ['Opposite sides parallel.', 'Opposite sides congruent.', 'Opposite angles congruent.', 'Consecutive angles supplementary.', 'Diagonals bisect each other.', 'Each diagonal forms two congruent triangles.'], 'Drag a vertex and inspect side, angle, and diagonal facts.', 'quad', { shape: 'parallelogram' }),
      concept('Tests for parallelograms', 'Use enough information about sides, angles, or diagonals to prove a quadrilateral is a parallelogram without a formal proof.', ['Both pairs opposite sides parallel.', 'Both pairs opposite sides congruent.', 'One pair opposite sides both parallel and congruent.', 'Both pairs opposite angles congruent.', 'Diagonals bisect each other.'], 'Toggle givens and decide whether they guarantee a parallelogram.', 'quad', { shape: 'parallelogram' }),
      concept('Rectangles: identify and apply rectangle properties', 'A rectangle is a parallelogram with four right angles.', ['All parallelogram properties apply.', 'Diagonals are congruent.', 'All angles are 90°.'], 'Move dimensions and compare the diagonal lengths.', 'quad', { shape: 'rectangle' }),
      concept('Rhombus: identify and apply rhombus properties', 'A rhombus is a parallelogram with four congruent sides.', ['All parallelogram properties apply.', 'Diagonals are perpendicular.', 'Diagonals bisect opposite angles.'], 'Use half-diagonals to find side length with Pythagorean Theorem.', 'quad', { shape: 'rhombus' }),
      concept('Square: identify and apply square properties', 'A square is both a rectangle and a rhombus.', ['Four congruent sides and four right angles.', 'Diagonals are congruent, perpendicular, and bisect angles.', 'All rectangle, rhombus, and parallelogram properties apply.'], 'List which rectangle and rhombus properties appear at once.', 'quad', { shape: 'square' })
    ]
  },
  {
    number: 13,
    title: 'Circles',
    concepts: [
      concept('Segments and Lines of a Circle: radius, diameter, chord, secant, tangent', 'Circle vocabulary describes how lines and segments interact with a circle.', ['Radius connects center to circle.', 'Diameter passes through center and equals two radii.', 'Chord connects two points on the circle.', 'Secant intersects a circle twice.', 'Tangent touches a circle once and is perpendicular to the radius at the point of tangency.'], 'Toggle each line type and describe its intersections.', 'circle'),
      concept('Radius/diameter relationship', 'Diameter is twice the radius.', ['d = 2r.', 'r = d/2.', 'Both use the same length unit.'], 'Change the radius and calculate diameter.', 'circle'),
      concept('Circumference', 'Circumference is the distance around a circle.', ['C = 2πr.', 'C = πd.', 'Use exact answers with π when requested.'], 'Estimate circumference by changing radius.', 'circle'),
      concept('Arc Length', 'Arc length is a fractional part of circumference.', ['Arc length = (central angle/360°) × 2πr.', 'Semicircle arc is half the circumference.', 'Use the central angle, not the inscribed angle.'], 'Set a 120° central angle and find arc length.', 'circle'),
      concept('Minor and major arcs', 'Minor arcs are less than 180°; major arcs are greater than 180°.', ['Minor arc measure equals its central angle.', 'Major arc = 360° - minor arc.', 'A semicircle is exactly 180°.'], 'Move the central angle to create minor, major, and semicircle arcs.', 'circle'),
      concept('Angle / Arc relationships: Central Angle', 'A central angle has vertex at the center.', ['Central angle measure equals intercepted arc measure.', 'Use it for arc length and sectors.', 'Radii form the sides of the angle.'], 'Compare central angle measure to highlighted arc measure.', 'circleAngles', { type: 'central' }),
      concept('Angle / Arc relationships: Inscribed Angle', 'An inscribed angle has vertex on the circle.', ['Inscribed angle = half its intercepted arc.', 'Intercepted arc = twice the inscribed angle.', 'Angles intercepting the same arc are congruent.'], 'Move the point on the circle and observe the half-arc relationship.', 'circleAngles', { type: 'inscribed' }),
      concept('Angle / Arc relationships: Chord Tangent', 'A tangent-chord angle is half its intercepted arc.', ['Angle = 1/2 intercepted arc.', 'Radius to tangent point is perpendicular to the tangent.', 'The angle vertex is on the circle.'], 'Adjust the arc and calculate the tangent-chord angle.', 'circleAngles', { type: 'tangent' }),
      concept('Angle / Arc relationships: Chord Chord Angle', 'Two chords intersecting inside a circle form angles from intercepted arcs.', ['Interior angle = 1/2(sum of intercepted arcs).', 'Use the angle and its vertical angle arcs.', 'Vertical interior angles are congruent.'], 'Average the two arcs shown.', 'circleAngles', { type: 'chordChord' }),
      concept('Angle / Arc relationships: Secant-Secant / Tangent-Tangent / Tangent-Secant', 'Angles outside a circle use half the difference of intercepted arcs.', ['Exterior angle = 1/2(major arc - minor arc).', 'Works for two secants, two tangents, or tangent-secant.', 'Subtract arcs before halving.'], 'Set two arcs and compute the exterior angle.', 'circleAngles', { type: 'external' }),
      concept('Big Circle Problems', 'Mixed circle problems combine arc equations, angle relationships, tangent lengths, and algebra.', ['Identify where the vertex is: center, on circle, inside, or outside.', 'Choose equal, half-sum, or half-difference relationship.', 'Set up algebra carefully before solving.'], 'Use the decision tree to pick the right circle formula.', 'circleAngles', { type: 'decision' })
    ]
  },
  {
    number: 14,
    title: 'Area',
    concepts: [
      concept('Parallelogram', 'Area of a parallelogram is base times height.', ['A = bh.', 'Height must be perpendicular to the base.', 'Do not use the slanted side as height unless it is perpendicular.'], 'Slide the height and watch the area change.', 'area', { shape: 'parallelogram' }),
      concept('Alternate formulas for special parallelograms: rectangle, square, rhombus', 'Special parallelograms have extra area formulas.', ['Rectangle: A = lw.', 'Square: A = s².', 'Rhombus: A = bh or A = (d₁d₂)/2.'], 'Compare rhombus area from base-height and diagonals.', 'area', { shape: 'special' }),
      concept('Triangle', 'Triangle area is half the area of a related parallelogram.', ['A = 1/2 bh.', 'Base and height must be perpendicular.', 'Any side can be a base if you know the corresponding height.'], 'Double the triangle to form a parallelogram.', 'area', { shape: 'triangle' }),
      concept('Circle', 'Circle area measures the space inside the circle.', ['A = πr².', 'Area units are square units.', 'Doubling radius multiplies area by 4.'], 'Change radius and compare area to circumference.', 'area', { shape: 'circle' }),
      concept('Area of Sector', 'A sector is a slice of a circle.', ['Sector area = (central angle/360°) × πr².', 'Use the same fraction as arc length but multiply by area.', 'A 90° sector is one fourth of the circle.'], 'Set 72° and calculate the sector area.', 'area', { shape: 'sector' })
    ]
  }
];

const partTwo = [
  ['Transformations', 'Rotations, Reflections, Translations', 'Write the coordinate rule, transform every vertex, then compare orientation and congruence.'],
  ['Proving Triangles Congruent', 'SSS, SAS, ASA, AAS/SAA, and Hy-Leg', 'Mark givens, identify included sides/angles, prove congruence, then use CPCTC if needed.'],
  ['Parallel Lines Cut by a Transversal - Angle Pairs', 'Alt. Int, Alt. Ext, Corresponding, and Same Side Interior/Exterior', 'Name the pair, decide congruent or supplementary, then solve the angle equation.'],
  ['Slope, Midpoint, and Distance Formulas', 'Coordinate formulas', 'List points clearly, substitute into the formula, simplify radicals when possible.'],
  ['Proving Triangles Similar', 'CSSTP', 'Prove similarity first, write vertex order carefully, then write proportional corresponding sides.'],
  ['Properties of Special Parallelograms', 'Square, rhombus, or rectangle applications', 'Identify the shape family, apply diagonal/angle properties, and connect to right triangles or trig as needed.'],
  ['Geometric Mean and Proportions of a right triangle', 'Altitude to hypotenuse relationships', 'Draw the three similar triangles and choose altitude² or leg² proportion.'],
  ['Law of Sines', 'Missing side or missing angle of a non-right triangle', 'Use when you have an angle-opposite side pair; use inverse sine for angles and check ambiguous cases.'],
  ['Law of Cosines', 'Missing side or missing angle of a non-right triangle', 'Use for SAS or SSS; isolate cosine and use inverse cosine for angles.'],
  ['Angle of Elevation/Depression', 'Applications', 'Draw the horizontal line first, label the angle from it, and choose trig or Pythagorean Theorem.'],
  ['Big Circle Problem', 'Mixed circle angle/arc relationships', 'Locate the vertex and use central, inscribed, inside, or outside formula.'],
  ['Composite Figure Area', 'Add/subtract areas', 'Split into familiar shapes, find each area, and add or subtract shaded regions.']
];

function concept(name, description, rules, prompt, lab, options = {}) {
  return { name, description, rules, prompt, lab, options };
}

const unitContainer = document.querySelector('#unitContainer');
const navList = document.querySelector('#unitNavList');
const template = document.querySelector('#conceptTemplate');
const checks = new Set(JSON.parse(localStorage.getItem('masteredConcepts') || '[]'));
let totalConcepts = 0;

function render() {
  units.forEach(unit => {
    const navItem = document.createElement('li');
    navItem.innerHTML = `<a href="#unit-${unit.number}">${unit.number}. ${unit.title}</a>`;
    navList.append(navItem);

    const section = document.createElement('section');
    section.className = 'unit-section';
    section.id = `unit-${unit.number}`;
    section.innerHTML = `<div class="unit-title"><span class="unit-badge">Unit ${unit.number}</span><h2>${unit.title}</h2></div>`;
    unit.concepts.forEach((item, index) => {
      totalConcepts++;
      const card = template.content.cloneNode(true);
      const article = card.querySelector('.concept-card');
      const id = `u${unit.number}-c${index}`;
      article.dataset.title = `${unit.title} ${item.name}`.toLowerCase();
      article.id = id;
      card.querySelector('.concept-path').textContent = `${unit.number}. ${unit.title}`;
      card.querySelector('h3').textContent = item.name;
      card.querySelector('.description').textContent = item.description;
      card.querySelector('.rules').innerHTML = item.rules.map(rule => `<li>${rule}</li>`).join('');
      card.querySelector('.prompt').textContent = item.prompt;
      const check = card.querySelector('.mastered-check');
      check.checked = checks.has(id);
      check.addEventListener('change', () => {
        check.checked ? checks.add(id) : checks.delete(id);
        localStorage.setItem('masteredConcepts', JSON.stringify([...checks]));
        updateProgress();
      });
      buildLab(card.querySelector('.lab-panel'), item);
      section.append(card);
    });
    unitContainer.append(section);
  });
  renderPartTwo();
  updateProgress();
}

function buildLab(panel, item) {
  const builders = {
    angleSum, intersectingLines, coordinate, transform, proof, partition, transversal, triangleAngles,
    triangleClass, congruence, proportion, similarity, similarTriangles, sideSplitter, rightTriangle,
    pythagorean, specialRight, trig, elevation, inverseTrig, oblique, polygon, quad, circle,
    circleAngles, area
  };
  (builders[item.lab] || proof)(panel, item.options || {}, item);
}

function svgBase(panel, viewBox = '0 0 420 280') {
  panel.innerHTML = `<svg viewBox="${viewBox}" role="img"></svg><div class="controls"></div>`;
  return [panel.querySelector('svg'), panel.querySelector('.controls')];
}
function polar(cx, cy, r, deg) { const a = (deg - 90) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
function fmt(n) { return Number.isFinite(n) ? (Math.round(n * 100) / 100).toString() : 'undefined'; }
function range(label, min, max, value, step = 1) { return `<label>${label}<input type="range" min="${min}" max="${max}" value="${value}" step="${step}"></label>`; }
function numberInput(label, value) { return `<label>${label}<input type="number" value="${value}" step="0.1"></label>`; }

function angleSum(panel, opts) {
  const [svg, controls] = svgBase(panel);
  const total = opts.sum || 180;
  controls.innerHTML = range('Angle A', 1, total - 1, Math.min(55, total - 1)) + '<div class="result-box"></div>';
  const input = controls.querySelector('input');
  const result = controls.querySelector('.result-box');
  const draw = () => {
    const a = +input.value, b = total - a, cx = 110, cy = 210, r = 145;
    const [x1,y1] = polar(cx,cy,r,0), [x2,y2] = polar(cx,cy,r,a), [x3,y3] = polar(cx,cy,r,total);
    svg.innerHTML = `<path d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 0 1 ${x3},${y3} Z" fill="rgba(109,93,252,.12)"/><line x1="${cx}" y1="${cy}" x2="${x1}" y2="${y1}" stroke="#6d5dfc" stroke-width="5"/><line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="#ffb545" stroke-width="5"/><line x1="${cx}" y1="${cy}" x2="${x3}" y2="${y3}" stroke="#16c6a7" stroke-width="5"/><text x="230" y="90" font-size="22" font-weight="800" fill="currentColor">${a}° + ${b}° = ${total}°</text><text x="230" y="130" fill="currentColor">${total===90?'Complementary/right angle':'Supplementary/straight angle'} model</text>`;
    result.textContent = opts.single ? `Angle measure: ${a}°. A right angle is 90°.` : `Missing angle: ${b}°. The two parts add to ${total}°.`;
  };
  input.oninput = draw; draw();
}

function intersectingLines(panel) {
  const [svg, controls] = svgBase(panel);
  controls.innerHTML = range('Line rotation', 15, 75, 38) + '<div class="result-box"></div>';
  const input = controls.querySelector('input'), result = controls.querySelector('.result-box');
  const draw = () => {
    const a = +input.value, cx=210, cy=140, len=190;
    const p1=polar(cx,cy,len,a+90), p2=polar(cx,cy,len,a+270), p3=polar(cx,cy,len,180-a), p4=polar(cx,cy,len,360-a);
    svg.innerHTML = `<line x1="${p1[0]}" y1="${p1[1]}" x2="${p2[0]}" y2="${p2[1]}" stroke="#6d5dfc" stroke-width="5"/><line x1="${p3[0]}" y1="${p3[1]}" x2="${p4[0]}" y2="${p4[1]}" stroke="#16c6a7" stroke-width="5"/><circle cx="${cx}" cy="${cy}" r="7" fill="#ffb545"/><text x="25" y="35" font-weight="800" fill="currentColor">Vertical pairs are equal</text><text x="260" y="235" fill="currentColor">Adjacent pairs sum to 180°</text>`;
    result.textContent = `One angle is about ${a*2}°; its vertical angle also ${a*2}°. Adjacent angles are ${180-a*2}°.`;
  };
  input.oninput = draw; draw();
}

function coordinate(panel) {
  const [svg, controls] = svgBase(panel, '0 0 420 320');
  controls.innerHTML = [numberInput('x₁', -4), numberInput('y₁', -2), numberInput('x₂', 3), numberInput('y₂', 4)].join('') + '<div class="result-box"></div>';
  const inputs = [...controls.querySelectorAll('input')], result = controls.querySelector('.result-box');
  const scale = 25, ox=210, oy=160;
  const map = (x,y) => [ox+x*scale, oy-y*scale];
  const draw = () => {
    const [x1,y1,x2,y2] = inputs.map(i => +i.value);
    const [a,b] = map(x1,y1), [c,d] = map(x2,y2), [mx,my] = map((x1+x2)/2,(y1+y2)/2);
    const slopeDen = x2-x1, slope = slopeDen === 0 ? 'undefined' : fmt((y2-y1)/slopeDen);
    const dist = Math.hypot(x2-x1, y2-y1);
    svg.innerHTML = gridSvg(420,320,scale,ox,oy) + `<line x1="${a}" y1="${b}" x2="${c}" y2="${d}" stroke="#6d5dfc" stroke-width="4"/><circle cx="${a}" cy="${b}" r="7" fill="#ffb545"/><circle cx="${c}" cy="${d}" r="7" fill="#16c6a7"/><circle cx="${mx}" cy="${my}" r="6" fill="#ef476f"/><text x="12" y="24" font-weight="800" fill="currentColor">A(${x1}, ${y1})  B(${x2}, ${y2})</text>`;
    result.innerHTML = `Slope: ${slope}<br>Midpoint: (${fmt((x1+x2)/2)}, ${fmt((y1+y2)/2)})<br>Distance: ${fmt(dist)}`;
  };
  inputs.forEach(i => i.oninput = draw); draw();
}
function gridSvg(w,h,scale,ox,oy){let s=''; for(let x=0;x<=w;x+=scale)s+=`<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="rgba(100,112,139,.22)"/>`; for(let y=0;y<=h;y+=scale)s+=`<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="rgba(100,112,139,.22)"/>`; return s+`<line x1="0" y1="${oy}" x2="${w}" y2="${oy}" stroke="rgba(100,112,139,.5)"/><line x1="${ox}" y1="0" x2="${ox}" y2="${h}" stroke="rgba(100,112,139,.5)"/>`;}

function transform(panel, opts) {
  const [svg, controls] = svgBase(panel);
  const mode = opts.mode || 'rotate';
  controls.innerHTML = `<label>Transformation<select><option>rotate</option><option>reflect</option><option>translate</option></select></label>${range('Amount', -5, 5, 2)}<div class="result-box"></div>`;
  const select = controls.querySelector('select'); select.value = mode;
  const amount = controls.querySelector('input'), result = controls.querySelector('.result-box');
  const pts = [[-2,-1],[1,-1],[0,2]], scale=42, ox=210, oy=140, map=(p)=>[ox+p[0]*scale, oy-p[1]*scale];
  const draw = () => {
    let m = select.value, k = +amount.value, out, rule;
    if (m === 'rotate') { const choices = [[0,0], [90,1], [180,2], [270,3]]; const deg = choices[Math.abs(k)%4][0]; out = pts.map(([x,y]) => deg===90?[-y,x]:deg===180?[-x,-y]:deg===270?[y,-x]:[x,y]); rule = `${deg}° CCW rotation about origin`; }
    else if (m === 'reflect') { out = pts.map(([x,y]) => k >= 0 ? [x,-y] : [-x,y]); rule = k >= 0 ? 'Reflection across x-axis: (x,y)→(x,-y)' : 'Reflection across y-axis: (x,y)→(-x,y)'; }
    else { out = pts.map(([x,y]) => [x+k,y+2]); rule = `Translation: (x,y)→(x+${k}, y+2)`; }
    const poly = arr => arr.map(p=>map(p).join(',')).join(' ');
    svg.innerHTML = gridSvg(420,280,42,ox,oy)+`<polygon points="${poly(pts)}" fill="rgba(109,93,252,.22)" stroke="#6d5dfc" stroke-width="4"/><polygon points="${poly(out)}" fill="rgba(22,198,167,.22)" stroke="#16c6a7" stroke-width="4"/><text x="12" y="24" font-weight="800" fill="currentColor">Preimage → Image</text>`;
    result.textContent = rule;
  };
  select.onchange = draw; amount.oninput = draw; draw();
}

function proof(panel) {
  panel.innerHTML = `<div class="formula-grid"><div class="formula-chip">Given</div><div class="formula-chip">Definitions</div><div class="formula-chip">Postulates</div><div class="formula-chip">Theorems</div><div class="formula-chip">Algebra</div><div class="formula-chip">Conclusion</div></div><div class="controls"><div class="result-box">Proof habit: mark the diagram, write what is known, justify every equation/congruence, and end with the exact statement requested.</div></div>`;
}

function partition(panel) {
  const [svg, controls] = svgBase(panel);
  controls.innerHTML = range('Part AB', 1, 19, 7) + range('Whole AC', 10, 30, 20) + '<div class="result-box"></div>';
  const [ab, whole] = controls.querySelectorAll('input'), result = controls.querySelector('.result-box');
  const draw=()=>{ const a=+ab.value, w=Math.max(+whole.value,a+1), bc=w-a; whole.value=w; svg.innerHTML=`<line x1="50" y1="145" x2="360" y2="145" stroke="#6d5dfc" stroke-width="6"/><circle cx="50" cy="145" r="7" fill="#ffb545"/><circle cx="${50+310*a/w}" cy="145" r="7" fill="#ef476f"/><circle cx="360" cy="145" r="7" fill="#16c6a7"/><text x="45" y="120" fill="currentColor">A</text><text x="${45+310*a/w}" y="120" fill="currentColor">B</text><text x="355" y="120" fill="currentColor">C</text><text x="110" y="210" font-weight="800" fill="currentColor">AB + BC = AC</text>`; result.textContent=`${a} + ${bc} = ${w}; missing part BC = ${bc}.`;};
  ab.oninput=draw; whole.oninput=draw; draw();
}

function transversal(panel){const [svg,controls]=svgBase(panel);controls.innerHTML='<label>Angle pair<select><option>Corresponding</option><option>Alternate interior</option><option>Alternate exterior</option><option>Same-side interior</option></select></label><div class="result-box"></div>';const sel=controls.querySelector('select'),res=controls.querySelector('.result-box');const draw=()=>{svg.innerHTML=`<line x1="40" y1="85" x2="380" y2="65" stroke="#6d5dfc" stroke-width="5"/><line x1="40" y1="205" x2="380" y2="185" stroke="#6d5dfc" stroke-width="5"/><line x1="120" y1="20" x2="300" y2="260" stroke="#16c6a7" stroke-width="5"/><text x="18" y="32" font-weight="800" fill="currentColor">Parallel lines cut by a transversal</text><circle cx="160" cy="78" r="14" fill="#ffb545"/><circle cx="250" cy="192" r="14" fill="#ef476f"/>`;res.textContent=sel.value==='Same-side interior'?'Same-side interior angles are supplementary: sum 180°.':`${sel.value} angles are congruent when the lines are parallel.`}; sel.onchange=draw; draw();}
function triangleAngles(panel){const [svg,controls]=svgBase(panel);controls.innerHTML=range('Angle A',20,120,60)+range('Angle B',20,120,70)+'<div class="result-box"></div>';const [a,b]=controls.querySelectorAll('input'),res=controls.querySelector('.result-box');const draw=()=>{let A=+a.value,B=+b.value,C=Math.max(1,180-A-B);svg.innerHTML=`<polygon points="70,220 350,220 170,45" fill="rgba(109,93,252,.16)" stroke="#6d5dfc" stroke-width="4"/><line x1="350" y1="220" x2="405" y2="220" stroke="#16c6a7" stroke-width="4"/><text x="95" y="205" fill="currentColor">A=${A}°</text><text x="275" y="205" fill="currentColor">B=${B}°</text><text x="170" y="78" fill="currentColor">C≈${C}°</text>`;res.textContent=`Interior sum: ${A}+${B}+${C}=180°. Exterior at B ≈ ${A+C}°.`}; a.oninput=draw;b.oninput=draw;draw();}
function triangleClass(panel){panel.innerHTML=`<div class="formula-grid"><div class="formula-chip">Scalene: no equal sides</div><div class="formula-chip">Isosceles: 2+ equal sides</div><div class="formula-chip">Equilateral: 3 equal sides</div><div class="formula-chip">Acute: all < 90°</div><div class="formula-chip">Right: one 90°</div><div class="formula-chip">Obtuse: one > 90°</div></div><div class="controls"><div class="result-box">Classify twice: by sides and by angles.</div></div>`;}
function congruence(panel){panel.innerHTML=`<div class="formula-grid"><div class="formula-chip">SSS</div><div class="formula-chip">SAS</div><div class="formula-chip">ASA</div><div class="formula-chip">AAS / SAA</div><div class="formula-chip">Hy-Leg</div></div><div class="controls"><div class="result-box">Shortcut warning: AAA proves similarity, not congruence; SSA is not a congruence shortcut.</div></div>`;}
function proportion(panel){const [svg,controls]=svgBase(panel);controls.innerHTML=range('x',1,20,8)+ '<div class="result-box"></div>';const x=controls.querySelector('input'),res=controls.querySelector('.result-box');const draw=()=>{const val=+x.value;svg.innerHTML=`<text x="50" y="80" font-size="34" font-weight="800" fill="currentColor">x/12 = 5/8</text><text x="50" y="140" font-size="28" fill="currentColor">8x = 60</text><text x="50" y="200" font-size="28" fill="currentColor">x = 7.5</text>`;res.textContent=`Your slider x=${val}. The exact solution is 7.5 because cross products are equal.`};x.oninput=draw;draw();}
function similarity(panel){const [svg,controls]=svgBase(panel);controls.innerHTML=range('Scale factor',0.5,3,1.5,0.1)+'<div class="result-box"></div>';const k=controls.querySelector('input'),res=controls.querySelector('.result-box');const draw=()=>{const s=+k.value;svg.innerHTML=`<rect x="55" y="90" width="90" height="70" fill="rgba(109,93,252,.2)" stroke="#6d5dfc" stroke-width="4"/><rect x="220" y="${130-35*s}" width="${90*s}" height="${70*s}" fill="rgba(22,198,167,.2)" stroke="#16c6a7" stroke-width="4"/><text x="40" y="210" fill="currentColor">Original</text><text x="220" y="210" fill="currentColor">Image</text>`;res.textContent=`Scale factor ${s}. Perimeter ratio ${s}; area ratio ${fmt(s*s)}. Angles stay equal.`};k.oninput=draw;draw();}
function similarTriangles(panel){panel.innerHTML=`<div class="formula-grid"><div class="formula-chip">AA: 2 angle pairs</div><div class="formula-chip">SSS Similarity: 3 equal ratios</div><div class="formula-chip">SAS Similarity: 2 ratios + included angle</div></div><div class="controls"><div class="result-box">After proving similarity, use CSSTP to write side proportions.</div></div>`;}
function sideSplitter(panel){const [svg,controls]=svgBase(panel);controls.innerHTML=range('Splitter position',0.25,0.8,0.45,0.01)+'<div class="result-box"></div>';const t=controls.querySelector('input'),res=controls.querySelector('.result-box');const draw=()=>{const k=+t.value,A=[210,35],B=[60,230],C=[360,230],D=[A[0]+(B[0]-A[0])*k,A[1]+(B[1]-A[1])*k],E=[A[0]+(C[0]-A[0])*k,A[1]+(C[1]-A[1])*k];svg.innerHTML=`<polygon points="${A} ${B} ${C}" fill="rgba(109,93,252,.13)" stroke="#6d5dfc" stroke-width="4"/><line x1="${D[0]}" y1="${D[1]}" x2="${E[0]}" y2="${E[1]}" stroke="#16c6a7" stroke-width="5"/><text x="190" y="28" fill="currentColor">A</text><text x="45" y="250" fill="currentColor">B</text><text x="365" y="250" fill="currentColor">C</text>`;res.textContent=`AD/DB = AE/EC = ${fmt(k/(1-k))}. DE is parallel to BC.`};t.oninput=draw;draw();}
function rightTriangle(panel){const [svg,controls]=svgBase(panel);controls.innerHTML=range('Hypotenuse segment p',1,16,7)+range('Hypotenuse segment q',1,16,9)+'<div class="result-box"></div>';const [p,q]=controls.querySelectorAll('input'),res=controls.querySelector('.result-box');const draw=()=>{const P=+p.value,Q=+q.value,h=Math.sqrt(P*Q);svg.innerHTML=`<polygon points="70,230 350,230 185,70" fill="rgba(109,93,252,.15)" stroke="#6d5dfc" stroke-width="4"/><line x1="185" y1="70" x2="185" y2="230" stroke="#16c6a7" stroke-width="4"/><text x="105" y="250" fill="currentColor">p=${P}</text><text x="230" y="250" fill="currentColor">q=${Q}</text>`;res.textContent=`Altitude h = √(pq) = √(${P*Q}) ≈ ${fmt(h)}.`};p.oninput=draw;q.oninput=draw;draw();}
function pythagorean(panel){const [svg,controls]=svgBase(panel);controls.innerHTML=range('Leg a',1,20,9)+range('Leg b',1,20,12)+'<div class="result-box"></div>';const [a,b]=controls.querySelectorAll('input'),res=controls.querySelector('.result-box');const draw=()=>{const A=+a.value,B=+b.value,c=Math.hypot(A,B);svg.innerHTML=`<polygon points="90,230 330,230 90,70" fill="rgba(109,93,252,.16)" stroke="#6d5dfc" stroke-width="4"/><text x="55" y="150" fill="currentColor">a=${A}</text><text x="190" y="250" fill="currentColor">b=${B}</text><text x="205" y="135" fill="currentColor">c≈${fmt(c)}</text>`;res.textContent=`${A}² + ${B}² = ${fmt(c)}². Hypotenuse ≈ ${fmt(c)}.`};a.oninput=draw;b.oninput=draw;draw();}
function specialRight(panel,opts){const kind=opts.kind||'30-60-90';panel.innerHTML=`<div class="formula-grid"><div class="formula-chip">30-60-90: x, x√3, 2x</div><div class="formula-chip">45-45-90: x, x, x√2</div></div><div class="controls"><label>Base value x<input type="range" min="1" max="15" value="6"></label><div class="result-box"></div></div>`;const input=panel.querySelector('input'),res=panel.querySelector('.result-box');const draw=()=>{const x=+input.value;res.textContent=kind==='45-45-90'?`45-45-90 sides: ${x}, ${x}, ${fmt(x*Math.SQRT2)}.`:`30-60-90 sides: short ${x}, long ${fmt(x*Math.sqrt(3))}, hypotenuse ${2*x}.`};input.oninput=draw;draw();}
function trig(panel){const [svg,controls]=svgBase(panel);controls.innerHTML=range('Angle θ',10,80,38)+range('Adjacent side',1,25,11)+'<div class="result-box"></div>';const [ang,adj]=controls.querySelectorAll('input'),res=controls.querySelector('.result-box');const draw=()=>{const th=+ang.value,A=+adj.value,opp=A*Math.tan(th*Math.PI/180),hyp=A/Math.cos(th*Math.PI/180);svg.innerHTML=`<polygon points="80,230 350,230 80,${230-opp*6}" fill="rgba(109,93,252,.15)" stroke="#6d5dfc" stroke-width="4"/><text x="100" y="220" fill="currentColor">θ=${th}°</text>`;res.innerHTML=`sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj<br>Opposite ≈ ${fmt(opp)}; hypotenuse ≈ ${fmt(hyp)}.`};ang.oninput=draw;adj.oninput=draw;draw();}
function elevation(panel){panel.innerHTML=`<svg viewBox="0 0 420 280"><line x1="50" y1="220" x2="370" y2="220" stroke="#64708b" stroke-width="3"/><line x1="80" y1="220" x2="330" y2="70" stroke="#6d5dfc" stroke-width="5"/><line x1="330" y1="70" x2="330" y2="220" stroke="#16c6a7" stroke-width="5"/><text x="95" y="205" fill="currentColor">angle of elevation</text><text x="250" y="55" fill="currentColor">line of sight</text></svg><div class="controls"><div class="result-box">Angles of elevation and depression are measured from horizontal lines; parallel horizontals often create equal alternate interior angles.</div></div>`;}
function inverseTrig(panel){panel.innerHTML=`<div class="formula-grid"><div class="formula-chip">sin⁻¹(opp/hyp)</div><div class="formula-chip">cos⁻¹(adj/hyp)</div><div class="formula-chip">tan⁻¹(opp/adj)</div></div><div class="controls"><div class="result-box">Example: θ = tan⁻¹(7/12) ≈ ${fmt(Math.atan(7/12)*180/Math.PI)}°.</div></div>`;}
function oblique(panel){panel.innerHTML=`<div class="formula-grid"><div class="formula-chip">Law of Sines: a/sin A = b/sin B</div><div class="formula-chip">Law of Cosines: c²=a²+b²-2ab cos C</div><div class="formula-chip">Angle: cos C=(a²+b²-c²)/(2ab)</div></div><div class="controls"><div class="result-box">Choose Law of Cosines for SAS/SSS; choose Law of Sines when you have a matching side-angle pair.</div></div>`;}
function polygon(panel){const [svg,controls]=svgBase(panel);controls.innerHTML=range('Number of sides n',3,18,6)+'<div class="result-box"></div>';const n=controls.querySelector('input'),res=controls.querySelector('.result-box');const draw=()=>{const N=+n.value,cx=210,cy=140,r=90,pts=Array.from({length:N},(_,i)=>polar(cx,cy,r,360*i/N));svg.innerHTML=`<polygon points="${pts.map(p=>p.join(',')).join(' ')}" fill="rgba(109,93,252,.16)" stroke="#6d5dfc" stroke-width="4"/>`+pts.map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="3" fill="#ffb545"/>`).join('');res.textContent=`Interior sum ${(N-2)*180}°. One regular interior ${fmt((N-2)*180/N)}°. Exterior sum 360°. One regular exterior ${fmt(360/N)}°.`};n.oninput=draw;draw();}
function quad(panel,opts){const shape=opts.shape||'parallelogram';panel.innerHTML=`<svg viewBox="0 0 420 280"><polygon points="90,210 295,210 350,80 145,80" fill="rgba(109,93,252,.16)" stroke="#6d5dfc" stroke-width="4"/><line x1="90" y1="210" x2="350" y2="80" stroke="#16c6a7" stroke-width="3"/><line x1="145" y1="80" x2="295" y2="210" stroke="#16c6a7" stroke-width="3"/><text x="35" y="35" font-weight="800" fill="currentColor">${shape}</text></svg><div class="controls"><div class="result-box">${shape==='rectangle'?'Rectangle: four right angles and congruent diagonals.':shape==='rhombus'?'Rhombus: four congruent sides, perpendicular diagonals, angle-bisecting diagonals.':shape==='square'?'Square: rectangle + rhombus properties at the same time.':'Parallelogram: opposite sides/angles congruent and diagonals bisect each other.'}</div></div>`;}
function circle(panel){const [svg,controls]=svgBase(panel);controls.innerHTML=range('Radius r',1,20,8)+range('Central angle',10,350,120)+'<div class="result-box"></div>';const [r,a]=controls.querySelectorAll('input'),res=controls.querySelector('.result-box');const draw=()=>{const R=+r.value,ang=+a.value;svg.innerHTML=`<circle cx="210" cy="140" r="90" fill="rgba(109,93,252,.1)" stroke="#6d5dfc" stroke-width="4"/><line x1="210" y1="140" x2="300" y2="140" stroke="#16c6a7" stroke-width="4"/><line x1="120" y1="140" x2="300" y2="140" stroke="#ffb545" stroke-width="4"/><line x1="310" y1="35" x2="310" y2="245" stroke="#ef476f" stroke-width="4"/><text x="318" y="60" fill="currentColor">tangent</text>`;res.innerHTML=`d=${2*R}; C=2πr≈${fmt(2*Math.PI*R)}; Area=πr²≈${fmt(Math.PI*R*R)}; arc length for ${ang}°≈${fmt((ang/360)*2*Math.PI*R)}.`};r.oninput=draw;a.oninput=draw;draw();}
function circleAngles(panel,opts){const type=opts.type||'central';panel.innerHTML=`<div class="formula-grid"><div class="formula-chip">Central: angle = arc</div><div class="formula-chip">Inscribed/tangent-chord: angle = ½ arc</div><div class="formula-chip">Inside: angle = ½(arc + arc)</div><div class="formula-chip">Outside: angle = ½(big arc - small arc)</div></div><div class="controls"><div class="result-box">Current focus: ${type}. First locate the vertex, then choose the matching formula.</div></div>`;}
function area(panel,opts){const [svg,controls]=svgBase(panel);controls.innerHTML=range('Base / radius',1,20,10)+range('Height / angle',1,20,8)+'<div class="result-box"></div>';const [a,b]=controls.querySelectorAll('input'),res=controls.querySelector('.result-box');const draw=()=>{const A=+a.value,B=+b.value,shape=opts.shape||'parallelogram';svg.innerHTML=`<polygon points="80,220 300,220 350,90 130,90" fill="rgba(109,93,252,.16)" stroke="#6d5dfc" stroke-width="4"/><line x1="130" y1="90" x2="130" y2="220" stroke="#16c6a7" stroke-width="4"/><circle cx="295" cy="105" r="55" fill="rgba(255,181,69,.18)" stroke="#ffb545" stroke-width="4"/>`;const msg=shape==='triangle'?`Triangle area = 1/2 bh = ${fmt(A*B/2)}.`:shape==='circle'?`Circle area = πr² ≈ ${fmt(Math.PI*A*A)}.`:shape==='sector'?`Sector area with ${B*10}° = ${fmt((B*10/360)*Math.PI*A*A)}.`:shape==='special'?`Rectangle/square/rhombus formulas include lw, s², and d₁d₂/2.`:`Parallelogram area = bh = ${fmt(A*B)}.`;res.textContent=msg};a.oninput=draw;b.oninput=draw;draw();}

function renderPartTwo() {
  const box = document.querySelector('#partTwoContainer');
  box.innerHTML = partTwo.map(([title, subtitle, strategy]) => `<article class="practice-card"><h3>${title}</h3><p>${subtitle}</p><div class="strategy"><strong>Strategy:</strong> ${strategy}</div></article>`).join('');
  box.querySelectorAll('.practice-card').forEach(card => card.addEventListener('click', () => card.classList.toggle('open')));
}
function updateProgress() {
  document.querySelector('#progressText').textContent = `${checks.size} of ${totalConcepts} concepts checked`;
  document.querySelector('#progressFill').style.width = `${totalConcepts ? checks.size / totalConcepts * 100 : 0}%`;
}

document.querySelector('#searchInput').addEventListener('input', e => {
  const q = e.target.value.trim().toLowerCase();
  document.querySelectorAll('.concept-card').forEach(card => card.classList.toggle('hidden', q && !card.dataset.title.includes(q)));
});
document.querySelector('#themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});
document.querySelector('#randomConcept').addEventListener('click', () => {
  const cards = [...document.querySelectorAll('.concept-card')];
  cards[Math.floor(Math.random() * cards.length)].scrollIntoView({ behavior: 'smooth', block: 'center' });
});
if (localStorage.getItem('darkMode') === 'true') document.body.classList.add('dark');
render();
