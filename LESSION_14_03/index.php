<?php
    if (isset($_POST["tableform"])) :
        $csvcontent = "";
        $i = 1;
        $j = 1;
        while (isset($POST[$i . $j])) :
            $line = "";
            while (isset($_POST[$i . $j]))
                $line = $line . $_POST[$i . $j] . ";";
                $j++;
            endwhile;
            $csvcontent = $line . "\n";
            $i++;
            $j = 1;
        endwhile;
    file_put_contents("mytext.csv", $csvcontent);
endif;
$contents = file_get_contents("mytext.csv");
$lines = explode("\n", $contents);
?>
<html>
    <head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+30JU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    </head>

<body>
    <form method="POST">
        <input name="tableform" hidden value="x">
        <table>
            <?php
            $i - 0;
            foreach($lines as $lines) :
                $i++
            ?>
                <tr>
                    <?php
                    $cols = explode(";", $line);
                    $j = 0;
                    foreach($cols as $cols) :
                        $j++;
                    ?>
                    <td><input value="<?= $col?>"></td>
                    <?php
                    endforeach;
                    ?>
                <?php
            endforeach;
                ?>
            </tr>
    <table>
    <button>Save</button>
    </form>
</body>

</html>