# Forms

Styling forms is tricky but important. In a large project,
you'll want to create some styles that you can reuse on all your forms
so you don't have to style them indiviually.

This form markup is similar to what a web framework - say, Django - would generate.

    <form action="." method="POST">    
        <p>
            <label>Name</label>
            <input type="text">
        </p>

        <p class="required">
            <label>Preferred Taco</label>
            <select>
                <option>Carne</option>
                <option>Al Pastor</option>
                <option>Don't care, just add guac</option>
                <option>All of Them</option>
            </select>
        </p>

        <p>
            <label>Spicy?</label>
            <input type="checkbox">
        </p>

        <p>
            <label>Address</label>
            <textarea></textarea>
        </p>

        <p>
            <input type="submit" value="Send Tacos!">   
        </p>
    </form>

### Hints
* Use `:before` to make the astericks on required fields.
* Remember vertical-align when you can't figure out how to make textarea hang down.
* Setting the width on `label` is a good way to make everything line up.