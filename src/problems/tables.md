# Tables

Tables are for tabular data, never for layout.

Visually, they're advantage is they'll automatically fit the cells to the available space.

Here's the markup. (If you're not familiar with any of the elements, you should look them up on MDN.)

    <table>
        <thead>
            <th>Name</th>
            <th>Content</th>
        </thead>
        <tbody>
            <tr>
                <td>Part 1</td>
                <td>Adipisicing in magna ipsum ullamco irure et sunt ex deserunt</td>
            </tr>
            <tr>
                <td>Part 2</td>
                <td>Velit amet exercitation aute deserunt do anim consectetur aliqua nulla</td>
            </tr>
            <tr>
                <td>Part 1</td>
                <td>Adipisicing in magna ipsum ullamco irure et sunt ex deserunt</td>
            </tr>
            <tr>
                <td>Part 2</td>
                <td>Velit amet exercitation aute deserunt do anim consectetur aliqua nulla</td>
            </tr>
        </tbody>
    </table>


### Notes
* Setting `table {border-collapse: collapse;}` removes the spacing between cells so you can control it with padding.
* Your knowledge of `vertical-align` and `nth-child` might be helpful on this one.